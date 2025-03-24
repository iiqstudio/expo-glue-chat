import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";;
import { Input, InputField } from "@/components/ui/input";
import { router, useNavigation } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";
import Subtitle from "./shared/ui/Subtitle";
import Title from "./shared/ui/Title";
import Header from "./shared/ui/Header";
import { SafeAreaView } from "react-native";
import { useEffect, useState } from "react";

export default function NameScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState("");

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
                                <InputField
                                    placeholder="Enter your name..."
                                    value={name}
                                    onChangeText={(text) => setName(text)}
                                />
                            </Input>
                        </Box>
                        <PrimaryButton
                            onPress={() => {
                                if (name.trim()) {
                                    router.push({
                                        pathname: "/lang-select",
                                        params: { name: name },
                                    });
                                } else {
                                    alert("Please enter your name");
                                }
                            }}
                        >
                            Continue
                        </PrimaryButton>
                    </Box>
                </Card>
            </Box>
        </SafeAreaView>
    );
}