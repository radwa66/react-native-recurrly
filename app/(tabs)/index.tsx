import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = React.useState<
    string | null
  >(null);
  return (
    <SafeAreaView className="flex-1  p-5  bg-background">
      <FlatList
        ListHeaderComponent={() => (
          <>
            {/* home header */}
            <View className="mb-2.5 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Image
                  source={images.avatar}
                  className="size-16 rounded-full"
                />
                <Text className="ml-4 text-2xl font-sans-bold text-primary">
                  {HOME_USER.name}
                </Text>
              </View>
              <Image source={icons.add} className="size-12" />
            </View>
            {/* balance card */}
            <View className="my-2.5 min-h-50 justify-between gap-5 rounded-3xl bg-accent p-6">
              <Text className="text-xl font-sans-semibold text-white/80">
                Balance
              </Text>

              <View className="flex-row items-center justify-between">
                <Text className="text-4xl font-sans-extrabold text-white">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className="text-xl font-sans-medium text-white">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>
            {/* upcoming */}
            <View className="mb-5">
              <ListHeading title="Upcoming " />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCard {...item} />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 20 }}
                ListEmptyComponent={
                  <Text className="text-center text-lg font-sans-semibold text-muted-foreground">
                    No upcoming renewals yet
                  </Text>
                }
              />
            </View>
            {/* all subscriptions */}

            <ListHeading title="All subscriptions " />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId(
                expandedSubscriptionId === item.id ? null : item.id,
              )
            }
          />
        )}
        extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text className="text-center text-lg font-sans-semibold text-muted-foreground">
            No subscriptions yet
          </Text>
        }
        contentContainerClassName="pb-20"
      />

      {/* subscription card */}
    </SafeAreaView>
  );
}
