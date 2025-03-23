import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack, Slot, Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <GluestackUIProvider>
            <Stack />
        </GluestackUIProvider>
    );
}   