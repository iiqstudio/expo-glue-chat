import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { router } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";
import Subtitle from "./shared/ui/Subtitle";
import Title from "./shared/ui/Title";
import Header from "./shared/ui/Header";
export default function NameScreen() {
    return (
        <Box className="flex-1">
            <Header progress={10} />
            <Card className="flex-1 bg-background-biscuit">
                <Box className="flex-1 justify-between">
                    <Box>
                        <Title>What should your tutor call you?</Title>
                        <Subtitle mb="10">Enter your name to get started</Subtitle>
                        <Input>
                            <InputField placeholder="Enter your name..." />
                        </Input>
                    </Box>
                    <PrimaryButton onPress={() => router.push("/lang-select")}>
                        Continue
                    </PrimaryButton>
                </Box>
            </Card>
        </Box>
    )
}