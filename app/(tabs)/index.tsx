import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView  } from "react-native-safe-area-context";
import "@/global.css"

export default function Index() {
  return (
   <SafeAreaView className="flex-1  p-5  bg-background">
      <Text className="text-7xl font-sans-extrabold text-success">
     home
      </Text>
      <Text className="text-7xl font-bold text-success">
     home
      </Text>
      <Link href="/subscriptions/spotify">View Subscriptions</Link>
    </SafeAreaView>
  );
}
