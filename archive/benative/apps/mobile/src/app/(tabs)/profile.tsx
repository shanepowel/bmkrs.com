import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-surface-primary">
      <Text className="text-h1 text-content-primary">Profile</Text>
      <Text className="text-body-sm text-content-secondary mt-2">
        Your profile coming soon
      </Text>
    </View>
  );
}
