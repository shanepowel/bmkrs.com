-- BeNative: Initial Schema Migration
-- Enables PostGIS and pgvector extensions, creates core tables with RLS

-- ─── Extensions ───
CREATE EXTENSION IF NOT EXISTS "postgis";
CREATE EXTENSION IF NOT EXISTS "vector";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- for fuzzy text search

-- ─── Custom Types ───
CREATE TYPE user_role AS ENUM ('consumer', 'business_owner', 'admin');
CREATE TYPE place_category AS ENUM ('restaurant', 'bar', 'cafe', 'shop', 'park', 'attraction', 'gym', 'entertainment', 'other');
CREATE TYPE deal_type AS ENUM ('percentage', 'bogo', 'happy_hour', 'fixed_price', 'freebie', 'special');
CREATE TYPE event_category AS ENUM ('music', 'food', 'sport', 'art', 'comedy', 'networking', 'market', 'other');
CREATE TYPE chat_message_type AS ENUM ('text', 'image', 'place_share', 'deal_share', 'event_share', 'location');

-- ─── Users ───
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL CHECK (char_length(username) >= 3 AND char_length(username) <= 30),
  display_name TEXT NOT NULL CHECK (char_length(display_name) >= 1),
  avatar_url TEXT,
  bio TEXT CHECK (char_length(bio) <= 160),
  home_location GEOGRAPHY(Point, 4326),
  xp_points INTEGER NOT NULL DEFAULT 0 CHECK (xp_points >= 0),
  level INTEGER NOT NULL DEFAULT 1 CHECK (level >= 1),
  role user_role NOT NULL DEFAULT 'consumer',
  preferences JSONB NOT NULL DEFAULT '{}',
  is_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_active_at TIMESTAMPTZ
);

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view any profile" ON public.users
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- ─── Places ───
CREATE TABLE public.places (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL CHECK (char_length(name) >= 1),
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category place_category NOT NULL,
  subcategories TEXT[] NOT NULL DEFAULT '{}',
  location GEOGRAPHY(Point, 4326) NOT NULL,
  address JSONB NOT NULL,
  phone TEXT,
  website TEXT,
  opening_hours JSONB,
  price_level INTEGER CHECK (price_level >= 1 AND price_level <= 4),
  photos TEXT[] NOT NULL DEFAULT '{}',
  tags TEXT[] NOT NULL DEFAULT '{}',
  amenities TEXT[] NOT NULL DEFAULT '{}',
  avg_rating NUMERIC(2,1),
  review_count INTEGER NOT NULL DEFAULT 0,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  metadata JSONB NOT NULL DEFAULT '{}',
  embedding VECTOR(1536),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_places_location ON public.places USING GIST (location);
CREATE INDEX idx_places_category ON public.places (category) WHERE is_active = true;
CREATE INDEX idx_places_name_trgm ON public.places USING GIN (name gin_trgm_ops);
CREATE INDEX idx_places_embedding ON public.places USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

ALTER TABLE public.places ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Places are publicly readable" ON public.places
  FOR SELECT USING (is_active = true);

CREATE POLICY "Business owners can insert places" ON public.places
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Owners can update their places" ON public.places
  FOR UPDATE USING (auth.uid() = owner_id OR EXISTS (
    SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
  ));

-- ─── Deals ───
CREATE TABLE public.deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id UUID NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL CHECK (char_length(title) >= 1),
  description TEXT NOT NULL DEFAULT '',
  deal_type deal_type NOT NULL,
  discount_value NUMERIC,
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,
  recurrence JSONB,
  is_live BOOLEAN NOT NULL DEFAULT false,
  redemption_count INTEGER NOT NULL DEFAULT 0 CHECK (redemption_count >= 0),
  max_redemptions INTEGER,
  photos TEXT[] NOT NULL DEFAULT '{}',
  verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (ends_at > starts_at)
);

CREATE INDEX idx_deals_live ON public.deals (place_id, is_live, ends_at) WHERE is_live = true;
CREATE INDEX idx_deals_place ON public.deals (place_id, created_at DESC);

ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Deals are publicly readable" ON public.deals
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create deals" ON public.deals
  FOR INSERT WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Creators can update their deals" ON public.deals
  FOR UPDATE USING (auth.uid() = created_by);

-- ─── Events ───
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id UUID NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL CHECK (char_length(title) >= 1),
  description TEXT NOT NULL DEFAULT '',
  category event_category NOT NULL,
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,
  cover_image TEXT,
  ticket_url TEXT,
  price_range JSONB,
  capacity INTEGER,
  attendee_count INTEGER NOT NULL DEFAULT 0 CHECK (attendee_count >= 0),
  is_featured BOOLEAN NOT NULL DEFAULT false,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (ends_at > starts_at)
);

CREATE INDEX idx_events_upcoming ON public.events (starts_at, ends_at) WHERE starts_at > now();
CREATE INDEX idx_events_place ON public.events (place_id, starts_at);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are publicly readable" ON public.events
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create events" ON public.events
  FOR INSERT WITH CHECK (auth.uid() = created_by);

-- ─── Reviews ───
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  place_id UUID NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT CHECK (char_length(title) <= 120),
  body TEXT NOT NULL CHECK (char_length(body) >= 1),
  photos TEXT[] NOT NULL DEFAULT '{}',
  helpful_count INTEGER NOT NULL DEFAULT 0 CHECK (helpful_count >= 0),
  owner_reply TEXT,
  owner_replied_at TIMESTAMPTZ,
  is_flagged BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, place_id)
);

CREATE INDEX idx_reviews_place ON public.reviews (place_id, created_at DESC);
CREATE INDEX idx_reviews_user ON public.reviews (user_id, created_at DESC);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Reviews are publicly readable" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create reviews" ON public.reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews" ON public.reviews
  FOR UPDATE USING (auth.uid() = user_id);

-- ─── Check-Ins ───
CREATE TABLE public.check_ins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  place_id UUID NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  location GEOGRAPHY(Point, 4326) NOT NULL,
  photo_url TEXT,
  comment TEXT CHECK (char_length(comment) <= 280),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_checkins_user ON public.check_ins (user_id, created_at DESC);
CREATE INDEX idx_checkins_place ON public.check_ins (place_id, created_at DESC);

ALTER TABLE public.check_ins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Check-ins are publicly readable" ON public.check_ins
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can check in" ON public.check_ins
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ─── Follows ───
CREATE TABLE public.follows (
  follower_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  following_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (follower_id, following_id),
  CHECK (follower_id != following_id)
);

ALTER TABLE public.follows ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Follows are publicly readable" ON public.follows
  FOR SELECT USING (true);

CREATE POLICY "Users can manage own follows" ON public.follows
  FOR ALL USING (auth.uid() = follower_id);

-- ─── Saved Lists ───
CREATE TABLE public.saved_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL CHECK (char_length(name) >= 1),
  description TEXT,
  is_collaborative BOOLEAN NOT NULL DEFAULT false,
  is_public BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.saved_list_items (
  list_id UUID NOT NULL REFERENCES public.saved_lists(id) ON DELETE CASCADE,
  place_id UUID NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  added_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (list_id, place_id)
);

ALTER TABLE public.saved_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_list_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public lists are readable" ON public.saved_lists
  FOR SELECT USING (is_public = true OR auth.uid() = user_id);

CREATE POLICY "Users can manage own lists" ON public.saved_lists
  FOR ALL USING (auth.uid() = user_id);

-- ─── Badges ───
CREATE TABLE public.badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  icon_url TEXT NOT NULL,
  criteria_type TEXT NOT NULL,
  criteria_value INTEGER NOT NULL,
  xp_reward INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE public.user_badges (
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  badge_id UUID NOT NULL REFERENCES public.badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, badge_id)
);

ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Badges are publicly readable" ON public.badges
  FOR SELECT USING (true);

CREATE POLICY "User badges are publicly readable" ON public.user_badges
  FOR SELECT USING (true);

-- ─── Chat ───
CREATE TABLE public.chat_rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  room_type TEXT NOT NULL CHECK (room_type IN ('direct', 'group', 'place', 'event')),
  related_id UUID, -- place_id or event_id if applicable
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.chat_room_members (
  room_id UUID NOT NULL REFERENCES public.chat_rooms(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_read_at TIMESTAMPTZ,
  PRIMARY KEY (room_id, user_id)
);

CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES public.chat_rooms(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL CHECK (char_length(content) <= 2000),
  message_type chat_message_type NOT NULL DEFAULT 'text',
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_chat_messages_room ON public.chat_messages (room_id, created_at DESC);

ALTER TABLE public.chat_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_room_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view rooms" ON public.chat_rooms
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.chat_room_members WHERE room_id = id AND user_id = auth.uid())
    OR room_type = 'place'
  );

CREATE POLICY "Members can view messages" ON public.chat_messages
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.chat_room_members WHERE room_id = chat_messages.room_id AND user_id = auth.uid())
  );

CREATE POLICY "Members can send messages" ON public.chat_messages
  FOR INSERT WITH CHECK (
    auth.uid() = sender_id
    AND EXISTS (SELECT 1 FROM public.chat_room_members WHERE room_id = chat_messages.room_id AND user_id = auth.uid())
  );

-- ─── Business Analytics ───
CREATE TABLE public.business_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id UUID NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  views INTEGER NOT NULL DEFAULT 0,
  profile_visits INTEGER NOT NULL DEFAULT 0,
  direction_requests INTEGER NOT NULL DEFAULT 0,
  call_clicks INTEGER NOT NULL DEFAULT 0,
  website_clicks INTEGER NOT NULL DEFAULT 0,
  deal_views INTEGER NOT NULL DEFAULT 0,
  deal_redemptions INTEGER NOT NULL DEFAULT 0,
  check_ins INTEGER NOT NULL DEFAULT 0,
  saves INTEGER NOT NULL DEFAULT 0,
  UNIQUE (place_id, date)
);

ALTER TABLE public.business_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view own analytics" ON public.business_analytics
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.places WHERE id = place_id AND owner_id = auth.uid())
  );

-- ─── Groups ───
CREATE TABLE public.groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) >= 1),
  description TEXT,
  cover_image TEXT,
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  is_public BOOLEAN NOT NULL DEFAULT true,
  member_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.group_members (
  group_id UUID NOT NULL REFERENCES public.groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('admin', 'moderator', 'member')),
  joined_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (group_id, user_id)
);

ALTER TABLE public.groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public groups are readable" ON public.groups
  FOR SELECT USING (is_public = true OR EXISTS (
    SELECT 1 FROM public.group_members WHERE group_id = id AND user_id = auth.uid()
  ));

-- ─── Helper Functions ───

-- Update avg_rating and review_count on places when reviews change
CREATE OR REPLACE FUNCTION update_place_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.places
  SET
    avg_rating = (SELECT ROUND(AVG(rating)::numeric, 1) FROM public.reviews WHERE place_id = COALESCE(NEW.place_id, OLD.place_id)),
    review_count = (SELECT COUNT(*) FROM public.reviews WHERE place_id = COALESCE(NEW.place_id, OLD.place_id)),
    updated_at = now()
  WHERE id = COALESCE(NEW.place_id, OLD.place_id);
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_update_place_rating
  AFTER INSERT OR UPDATE OR DELETE ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION update_place_rating();

-- Update updated_at on places
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_places_updated_at
  BEFORE UPDATE ON public.places
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Nearby places search function
CREATE OR REPLACE FUNCTION nearby_places(
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  radius_metres INTEGER DEFAULT 5000,
  cat place_category DEFAULT NULL,
  lim INTEGER DEFAULT 20
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  category place_category,
  location GEOGRAPHY,
  distance_metres DOUBLE PRECISION,
  avg_rating NUMERIC,
  review_count INTEGER,
  photos TEXT[],
  address JSONB,
  price_level INTEGER,
  is_verified BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.id, p.name, p.category, p.location,
    ST_Distance(p.location, ST_MakePoint(lng, lat)::geography) AS distance_metres,
    p.avg_rating, p.review_count, p.photos, p.address, p.price_level, p.is_verified
  FROM public.places p
  WHERE p.is_active = true
    AND ST_DWithin(p.location, ST_MakePoint(lng, lat)::geography, radius_metres)
    AND (cat IS NULL OR p.category = cat)
  ORDER BY distance_metres ASC
  LIMIT lim;
END;
$$ LANGUAGE plpgsql STABLE;
