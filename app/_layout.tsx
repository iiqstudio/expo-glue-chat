import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack, Slot, Tabs } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { Text } from "@/components/ui/text";
import { ChevronLeftIcon, Icon } from "@/components/ui/icon";

export default function RootLayout() {
    return (
        <GluestackUIProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFAF3", maxWidth: 1200 }}>
                {/* <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#FFFAF3',
                        },
                        headerLeft: () =>
                            <Pressable className="flex-row gap-2 items-center">
                                <Icon as={ChevronLeftIcon} />
                                <Text>Back</Text>
                            </Pressable>
                    }} /> */}
                <Slot />
            </SafeAreaView>
        </GluestackUIProvider>
    );
}   