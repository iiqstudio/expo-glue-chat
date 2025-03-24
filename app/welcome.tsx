import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";


export default function WelcomeToAiScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 flex-col justify-between bg-background-darkblue pt-14">
            <Box className="px-7">
                <Box className="mb-16">
                    <Heading size="4xl" className="text-typography-0 font-bold leading-[58px] tracking-[0.2px]">Welcome to AI Tutor!</Heading>
                    <Heading size="md" className="text-secondary-950">Speak fluently, one conversation at a time.</Heading>
                </Box>

                <Box className="gap-4">
                    <Button
                        size="lg"
                        className="w-full rounded-lg bg-background-red"
                        onPress={() => router.push('/name')}
                    >
                        <ButtonText className="font-semibold">🔥 Let’s start!!!</ButtonText>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full border border-typography-white rounded-lg"
                    >
                        <ButtonText className="text-typography-white">
                            I have a subscription
                        </ButtonText>
                    </Button>
                </Box>
            </Box>
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-background-indigo rounded-full blur-3xl opacity-70 z-0"></Box>
            <Box className="flex items-center justify-center w-full">
                <Image
                    source={require("../assets/welcome.png")}
                    alt="welcome"
                    size="full"
                    resizeMode="contain"
                />
            </Box>
        </SafeAreaView>
    )
}