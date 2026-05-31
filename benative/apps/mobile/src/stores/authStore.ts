import { create } from 'zustand';
import type { Session, User as SupabaseUser } from '@supabase/supabase-js';
import type { User } from '@benative/shared';

interface AuthState {
  session: Session | null;
  supabaseUser: SupabaseUser | null;
  profile: User | null;
  isLoading: boolean;
  isOnboarded: boolean;

  setSession: (session: Session | null) => void;
  setProfile: (profile: User | null) => void;
  setIsLoading: (loading: boolean) => void;
  setIsOnboarded: (onboarded: boolean) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  supabaseUser: null,
  profile: null,
  isLoading: true,
  isOnboarded: false,

  setSession: (session) =>
    set({
      session,
      supabaseUser: session?.user ?? null,
    }),

  setProfile: (profile) => set({ profile }),

  setIsLoading: (isLoading) => set({ isLoading }),

  setIsOnboarded: (isOnboarded) => set({ isOnboarded }),

  signOut: () =>
    set({
      session: null,
      supabaseUser: null,
      profile: null,
      isOnboarded: false,
    }),
}));
