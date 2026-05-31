import type { PlaceCategory, EventCategory, DealType } from '@benative/shared';

// ─── Query Key Factories ───

export const placeKeys = {
  all: ['places'] as const,
  lists: () => [...placeKeys.all, 'list'] as const,
  nearby: (lat: number, lng: number, radius: number, category?: PlaceCategory) =>
    [...placeKeys.lists(), { lat, lng, radius, category }] as const,
  search: (query: string) => [...placeKeys.lists(), 'search', query] as const,
  detail: (id: string) => [...placeKeys.all, 'detail', id] as const,
  reviews: (placeId: string) => [...placeKeys.all, 'reviews', placeId] as const,
  analytics: (placeId: string) => [...placeKeys.all, 'analytics', placeId] as const,
};

export const dealKeys = {
  all: ['deals'] as const,
  lists: () => [...dealKeys.all, 'list'] as const,
  live: (lat: number, lng: number, radius: number) =>
    [...dealKeys.lists(), 'live', { lat, lng, radius }] as const,
  byPlace: (placeId: string) => [...dealKeys.lists(), 'place', placeId] as const,
  detail: (id: string) => [...dealKeys.all, 'detail', id] as const,
};

export const eventKeys = {
  all: ['events'] as const,
  lists: () => [...eventKeys.all, 'list'] as const,
  upcoming: (lat: number, lng: number, category?: EventCategory) =>
    [...eventKeys.lists(), 'upcoming', { lat, lng, category }] as const,
  byPlace: (placeId: string) => [...eventKeys.lists(), 'place', placeId] as const,
  detail: (id: string) => [...eventKeys.all, 'detail', id] as const,
  attendees: (eventId: string) => [...eventKeys.all, 'attendees', eventId] as const,
};

export const userKeys = {
  all: ['users'] as const,
  profile: (id: string) => [...userKeys.all, 'profile', id] as const,
  followers: (id: string) => [...userKeys.all, 'followers', id] as const,
  following: (id: string) => [...userKeys.all, 'following', id] as const,
  badges: (id: string) => [...userKeys.all, 'badges', id] as const,
  checkIns: (id: string) => [...userKeys.all, 'checkins', id] as const,
  savedLists: (id: string) => [...userKeys.all, 'savedLists', id] as const,
};

export const feedKeys = {
  all: ['feed'] as const,
  personal: () => [...feedKeys.all, 'personal'] as const,
  group: (groupId: string) => [...feedKeys.all, 'group', groupId] as const,
};

export const chatKeys = {
  all: ['chat'] as const,
  rooms: () => [...chatKeys.all, 'rooms'] as const,
  messages: (roomId: string) => [...chatKeys.all, 'messages', roomId] as const,
};

export const recommendationKeys = {
  all: ['recommendations'] as const,
  forYou: (lat: number, lng: number) =>
    [...recommendationKeys.all, 'forYou', { lat, lng }] as const,
  similar: (placeId: string) =>
    [...recommendationKeys.all, 'similar', placeId] as const,
};

export const gamificationKeys = {
  all: ['gamification'] as const,
  badges: () => [...gamificationKeys.all, 'badges'] as const,
  leaderboard: () => [...gamificationKeys.all, 'leaderboard'] as const,
  challenges: () => [...gamificationKeys.all, 'challenges'] as const,
};
