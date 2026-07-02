import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
   <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/subscriptions/spotify">View Subscriptions</Link>
    </View>
  );
}
