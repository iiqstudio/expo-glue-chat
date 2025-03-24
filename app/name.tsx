import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";;
import { Input, InputField } from "@/components/ui/input";
import { router, useNavigation } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";
import Subtitle from "./shared/ui/Subtitle";
import Title from "./shared/ui/Title";
import Header from "./shared/ui/Header";
import { SafeAreaView } from "react-native";
import { useEffect } from "react";

export default function NameScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "",
            headerStyle: {
                backgroundColor: '#FFFAF3',
            },
            headerTintColor: '#262627',
            headerBackTitle: 'Back'
        });
    }, [navigation]);

    return (
        <SafeAreaView className="flex-1 bg-background-biscuit">
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
        </SafeAreaView>
    );
}