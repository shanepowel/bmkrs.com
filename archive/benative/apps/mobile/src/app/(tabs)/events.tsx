import { View, Text } from 'react-native';

export default function EventsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-surface-primary">
      <Text className="text-h1 text-content-primary">Events</Text>
      <Text className="text-body-sm text-content-secondary mt-2">
        Upcoming events coming soon
      </Text>
    </View>
  );
}
