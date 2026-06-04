import { View, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-surface-primary">
      <Text className="text-h1 text-content-primary">Explore</Text>
      <Text className="text-body-sm text-content-secondary mt-2">
        Map-based discovery coming soon
      </Text>
    </View>
  );
}
