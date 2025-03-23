import Header from "@/app/shared/ui/Header";
import PrimaryButton from "@/app/shared/ui/PrimaryButton";
import Subtitle from "@/app/shared/ui/Subtitle";
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { useRouter } from "expo-router";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";

export default function EnterYourNameScreen() {
    const router = useRouter();

    return (
        <Box className="flex-1">
            <Header />
            <Card className="flex-1 bg-background-biscuit">
                <Box className="flex-1 justify-between">
                    <Box>
                        <Title>What should your tutor call you?</Title>
                        <Subtitle mb="12">Enter your name to get started</Subtitle>
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
    );
}