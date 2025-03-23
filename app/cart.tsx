import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { useRouter } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";
import Subtitle from "./shared/ui/Subtitle";
import Title from "./shared/ui/Title";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import Header from "./shared/ui/Header";

export default function Cart() {
    const router = useRouter();

    return (
        <Box className="flex-1">
            <Header />
            <Card className="flex-1 bg-background-biscuit">
                <Box className="flex-1 justify-between">
                    <Box>
                        <Title>CART</Title>
                        <Subtitle mb="10">Next screen</Subtitle>
                        <Input>
                            <InputField placeholder="Enter your name..." />
                        </Input>
                    </Box>
                    <PrimaryButton onPress={() => router.back()}>
                        Continue
                    </PrimaryButton>
                </Box>
            </Card>
        </Box>
    );
}