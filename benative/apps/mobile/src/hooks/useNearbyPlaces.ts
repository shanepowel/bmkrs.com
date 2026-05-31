import { useQuery } from '@tanstack/react-query';
import { supabase } from '../services/supabase';
import { placeKeys } from '../services/queryKeys';
import type { Place, PlaceCategory } from '@benative/shared';

interface NearbyPlacesParams {
  latitude: number;
  longitude: number;
  radius?: number;
  category?: PlaceCategory | null;
  enabled?: boolean;
}

interface NearbyPlaceResult {
  id: string;
  name: string;
  category: PlaceCategory;
  distance_metres: number;
  avg_rating: number | null;
  review_count: number;
  photos: string[];
  address: Record<string, unknown>;
  price_level: number | null;
  is_verified: boolean;
}

export function useNearbyPlaces({
  latitude,
  longitude,
  radius = 5000,
  category,
  enabled = true,
}: NearbyPlacesParams) {
  return useQuery({
    queryKey: placeKeys.nearby(latitude, longitude, radius, category ?? undefined),
    queryFn: async () => {
      const { data, error } = await supabase.rpc('nearby_places', {
        lat: latitude,
        lng: longitude,
        radius_metres: radius,
        cat: category ?? undefined,
        lim: 20,
      });

      if (error) throw new Error(error.message);
      return (data as NearbyPlaceResult[]) ?? [];
    },
    enabled: enabled && latitude !== 0 && longitude !== 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePlaceDetail(placeId: string) {
  return useQuery({
    queryKey: placeKeys.detail(placeId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from('places')
        .select('*')
        .eq('id', placeId)
        .single();

      if (error) throw new Error(error.message);
      return data as Place;
    },
    enabled: !!placeId,
  });
}
