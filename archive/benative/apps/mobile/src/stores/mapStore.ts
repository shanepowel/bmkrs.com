import { create } from 'zustand';
import type { PlaceCategory } from '@benative/shared';

interface MapFilters {
  category: PlaceCategory | null;
  priceLevel: number | null;
  amenities: string[];
  openNow: boolean;
  hasDeals: boolean;
  minRating: number | null;
  sortBy: 'distance' | 'rating' | 'popularity' | 'deals';
}

interface MapState {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  userLocation: {
    latitude: number;
    longitude: number;
  } | null;
  filters: MapFilters;
  searchQuery: string;
  isSearching: boolean;
  bottomSheetSnap: 'peek' | 'half' | 'full';

  setRegion: (region: MapState['region']) => void;
  setUserLocation: (location: MapState['userLocation']) => void;
  setFilter: <K extends keyof MapFilters>(key: K, value: MapFilters[K]) => void;
  resetFilters: () => void;
  setSearchQuery: (query: string) => void;
  setIsSearching: (searching: boolean) => void;
  setBottomSheetSnap: (snap: MapState['bottomSheetSnap']) => void;
}

const DEFAULT_FILTERS: MapFilters = {
  category: null,
  priceLevel: null,
  amenities: [],
  openNow: false,
  hasDeals: false,
  minRating: null,
  sortBy: 'distance',
};

const DEFAULT_REGION = {
  latitude: 51.4816,
  longitude: -0.6044,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

export const useMapStore = create<MapState>((set) => ({
  region: DEFAULT_REGION,
  userLocation: null,
  filters: DEFAULT_FILTERS,
  searchQuery: '',
  isSearching: false,
  bottomSheetSnap: 'peek',

  setRegion: (region) => set({ region }),

  setUserLocation: (userLocation) => set({ userLocation }),

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  resetFilters: () => set({ filters: DEFAULT_FILTERS }),

  setSearchQuery: (searchQuery) => set({ searchQuery }),

  setIsSearching: (isSearching) => set({ isSearching }),

  setBottomSheetSnap: (bottomSheetSnap) => set({ bottomSheetSnap }),
}));
