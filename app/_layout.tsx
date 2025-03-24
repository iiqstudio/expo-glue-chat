import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
    return (
        <GluestackUIProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
            {/* <Slot /> */}
        </GluestackUIProvider>
    );
}