import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TAB_ICON_SIZE = 24;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1A73E8',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Ionicons name="map" size={TAB_ICON_SIZE} color={color} />,
        }}
      />
      <Tabs.Screen
        name="deals"
        options={{
          title: 'Deals',
          tabBarIcon: ({ color }) => <Ionicons name="pricetag" size={TAB_ICON_SIZE} color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <Ionicons name="calendar" size={TAB_ICON_SIZE} color={color} />,
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: 'Social',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={TAB_ICON_SIZE} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={TAB_ICON_SIZE} color={color} />,
        }}
      />
    </Tabs>
  );
}
