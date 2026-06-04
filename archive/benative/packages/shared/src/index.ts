import { z } from 'zod';

// ─── Enums (as const unions, not TS enums) ───

export const UserRole = z.enum(['consumer', 'business_owner', 'admin']);
export type UserRole = z.infer<typeof UserRole>;

export const PlaceCategory = z.enum([
  'restaurant', 'bar', 'cafe', 'shop', 'park',
  'attraction', 'gym', 'entertainment', 'other',
]);
export type PlaceCategory = z.infer<typeof PlaceCategory>;

export const DealType = z.enum([
  'percentage', 'bogo', 'happy_hour', 'fixed_price', 'freebie', 'special',
]);
export type DealType = z.infer<typeof DealType>;

export const EventCategory = z.enum([
  'music', 'food', 'sport', 'art', 'comedy', 'networking', 'market', 'other',
]);
export type EventCategory = z.infer<typeof EventCategory>;

// ─── Coordinates ───

export const coordinatesSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});
export type Coordinates = z.infer<typeof coordinatesSchema>;

// ─── Address ───

export const addressSchema = z.object({
  line1: z.string().min(1),
  line2: z.string().optional(),
  city: z.string().min(1),
  postcode: z.string().min(1),
  country: z.string().default('GB'),
});
export type Address = z.infer<typeof addressSchema>;

// ─── User ───

export const userSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(3).max(30).regex(/^[a-zA-Z0-9_]+$/),
  display_name: z.string().min(1).max(60),
  avatar_url: z.string().url().nullable(),
  bio: z.string().max(160).nullable(),
  home_location: coordinatesSchema.nullable(),
  xp_points: z.number().int().min(0).default(0),
  level: z.number().int().min(1).default(1),
  role: UserRole.default('consumer'),
  preferences: z.record(z.unknown()).default({}),
  is_verified: z.boolean().default(false),
  created_at: z.string().datetime(),
  last_active_at: z.string().datetime().nullable(),
});
export type User = z.infer<typeof userSchema>;

export const userProfileUpdateSchema = userSchema.pick({
  display_name: true,
  bio: true,
  avatar_url: true,
}).partial();
export type UserProfileUpdate = z.infer<typeof userProfileUpdateSchema>;

// ─── Place ───

export const openingHoursSchema = z.object({
  monday: z.object({ open: z.string(), close: z.string(), closed: z.boolean().default(false) }),
  tuesday: z.object({ open: z.string(), close: z.string(), closed: z.boolean().default(false) }),
  wednesday: z.object({ open: z.string(), close: z.string(), closed: z.boolean().default(false) }),
  thursday: z.object({ open: z.string(), close: z.string(), closed: z.boolean().default(false) }),
  friday: z.object({ open: z.string(), close: z.string(), closed: z.boolean().default(false) }),
  saturday: z.object({ open: z.string(), close: z.string(), closed: z.boolean().default(false) }),
  sunday: z.object({ open: z.string(), close: z.string(), closed: z.boolean().default(false) }),
});
export type OpeningHours = z.infer<typeof openingHoursSchema>;

export const placeSchema = z.object({
  id: z.string().uuid(),
  owner_id: z.string().uuid().nullable(),
  name: z.string().min(1).max(120),
  slug: z.string(),
  description: z.string().max(2000),
  category: PlaceCategory,
  subcategories: z.array(z.string()).default([]),
  location: coordinatesSchema,
  address: addressSchema,
  phone: z.string().nullable(),
  website: z.string().url().nullable(),
  opening_hours: openingHoursSchema.nullable(),
  price_level: z.number().int().min(1).max(4).nullable(),
  photos: z.array(z.string().url()).default([]),
  tags: z.array(z.string()).default([]),
  amenities: z.array(z.string()).default([]),
  avg_rating: z.number().min(0).max(5).nullable(),
  review_count: z.number().int().min(0).default(0),
  is_verified: z.boolean().default(false),
  is_active: z.boolean().default(true),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
export type Place = z.infer<typeof placeSchema>;

export const createPlaceSchema = placeSchema.omit({
  id: true,
  owner_id: true,
  slug: true,
  avg_rating: true,
  review_count: true,
  is_verified: true,
  is_active: true,
  created_at: true,
  updated_at: true,
});
export type CreatePlace = z.infer<typeof createPlaceSchema>;

// ─── Deal ───

export const dealSchema = z.object({
  id: z.string().uuid(),
  place_id: z.string().uuid(),
  created_by: z.string().uuid(),
  title: z.string().min(1).max(120),
  description: z.string().max(500),
  deal_type: DealType,
  discount_value: z.number().nullable(),
  starts_at: z.string().datetime(),
  ends_at: z.string().datetime(),
  recurrence: z.record(z.unknown()).nullable(),
  is_live: z.boolean().default(false),
  redemption_count: z.number().int().min(0).default(0),
  max_redemptions: z.number().int().nullable(),
  photos: z.array(z.string().url()).default([]),
  verified: z.boolean().default(false),
  created_at: z.string().datetime(),
});
export type Deal = z.infer<typeof dealSchema>;

export const createDealSchema = dealSchema.omit({
  id: true,
  created_by: true,
  is_live: true,
  redemption_count: true,
  verified: true,
  created_at: true,
});
export type CreateDeal = z.infer<typeof createDealSchema>;

// ─── Event ───

export const eventSchema = z.object({
  id: z.string().uuid(),
  place_id: z.string().uuid(),
  created_by: z.string().uuid(),
  title: z.string().min(1).max(200),
  description: z.string().max(2000),
  category: EventCategory,
  starts_at: z.string().datetime(),
  ends_at: z.string().datetime(),
  cover_image: z.string().url().nullable(),
  ticket_url: z.string().url().nullable(),
  price_range: z.object({
    min: z.number().min(0),
    max: z.number().min(0),
    is_free: z.boolean().default(false),
  }).nullable(),
  capacity: z.number().int().nullable(),
  attendee_count: z.number().int().min(0).default(0),
  is_featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  created_at: z.string().datetime(),
});
export type Event = z.infer<typeof eventSchema>;

// ─── Review ───

export const reviewSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  place_id: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  title: z.string().max(120).nullable(),
  body: z.string().max(2000),
  photos: z.array(z.string().url()).default([]),
  helpful_count: z.number().int().min(0).default(0),
  owner_reply: z.string().nullable(),
  owner_replied_at: z.string().datetime().nullable(),
  is_flagged: z.boolean().default(false),
  created_at: z.string().datetime(),
});
export type Review = z.infer<typeof reviewSchema>;

export const createReviewSchema = reviewSchema.pick({
  place_id: true,
  rating: true,
  title: true,
  body: true,
  photos: true,
});
export type CreateReview = z.infer<typeof createReviewSchema>;

// ─── Check-In ───

export const checkInSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  place_id: z.string().uuid(),
  location: coordinatesSchema,
  photo_url: z.string().url().nullable(),
  comment: z.string().max(280).nullable(),
  created_at: z.string().datetime(),
});
export type CheckIn = z.infer<typeof checkInSchema>;

// ─── Chat ───

export const chatMessageSchema = z.object({
  id: z.string().uuid(),
  room_id: z.string().uuid(),
  sender_id: z.string().uuid(),
  content: z.string().max(2000),
  message_type: z.enum(['text', 'image', 'place_share', 'deal_share', 'event_share', 'location']),
  metadata: z.record(z.unknown()).nullable(),
  created_at: z.string().datetime(),
  read_by: z.array(z.string().uuid()).default([]),
});
export type ChatMessage = z.infer<typeof chatMessageSchema>;

// ─── Badge ───

export const badgeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  icon_url: z.string().url(),
  criteria_type: z.string(),
  criteria_value: z.number().int(),
  xp_reward: z.number().int().default(0),
});
export type Badge = z.infer<typeof badgeSchema>;

// ─── API Response Envelope ───

export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    meta: z.object({
      cursor: z.string().nullable().optional(),
      total: z.number().int().optional(),
    }).optional(),
  });

// ─── Nearby Search Params ───

export const nearbySearchSchema = z.object({
  latitude: z.coerce.number().min(-90).max(90),
  longitude: z.coerce.number().min(-180).max(180),
  radius: z.coerce.number().min(100).max(50000).default(5000),
  category: PlaceCategory.optional(),
  query: z.string().optional(),
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});
export type NearbySearch = z.infer<typeof nearbySearchSchema>;

// ─── XP Level Thresholds ───

export const XP_LEVELS = [
  { level: 1, xp: 0, title: 'Newcomer' },
  { level: 2, xp: 100, title: 'Explorer' },
  { level: 3, xp: 300, title: 'Scout' },
  { level: 4, xp: 600, title: 'Pathfinder' },
  { level: 5, xp: 1000, title: 'Navigator' },
  { level: 6, xp: 1500, title: 'Trailblazer' },
  { level: 7, xp: 2500, title: 'Local Legend' },
  { level: 8, xp: 4000, title: 'City Guide' },
  { level: 9, xp: 6000, title: 'Ambassador' },
  { level: 10, xp: 10000, title: 'Luminary' },
] as const;

export const XP_ACTIONS = {
  CHECK_IN: 10,
  REVIEW: 25,
  REVIEW_PHOTO: 10,
  FIRST_REVIEW_AT_VENUE: 15,
  SHARE_PLACE: 5,
  REVIEW_HELPFUL_VOTE: 5,
  NEW_NEIGHBOURHOOD: 20,
  WEEKLY_CHALLENGE: 50,
  REFERRAL: 100,
  EVENT_ATTENDANCE: 15,
} as const;

export function getLevelForXP(xp: number): (typeof XP_LEVELS)[number] {
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    const level = XP_LEVELS[i];
    if (level && xp >= level.xp) return level;
  }
  return XP_LEVELS[0]!;
}
