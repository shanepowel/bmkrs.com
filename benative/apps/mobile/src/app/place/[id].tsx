import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-surface-primary p-4">
      <Text className="text-h1 text-content-primary">Place</Text>
      <Text className="text-body-sm text-content-secondary mt-2">{id ?? '—'}</Text>
    </View>
  );
}
