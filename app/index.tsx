import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Input, InputField } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Header from "./shared/ui/Header";
import { useRouter } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";
import Subtitle from "./shared/ui/Subtitle";
import Title from "./shared/ui/Title";


export default function HomeScreen() {
    const router = useRouter();

    return (
        <Box className="flex-1">
            <Header />
            <Card className="flex-1 bg-background-biscuit">
                <Box className="flex-1 justify-between">
                    <Box>
                        <Title>What should your tutor call you?</Title>
                        <Subtitle mb="10">Enter your name to get started</Subtitle>
                        <Input>
                            <InputField placeholder="Enter your name..." />
                        </Input>
                    </Box>
                    <PrimaryButton onPress={() => router.push("/cart")}>
                        Continue
                    </PrimaryButton>
                </Box>
            </Card>
        </Box>
    )
}