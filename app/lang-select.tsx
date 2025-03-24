
import Header from "@/app/shared/ui/Header";
import Subtitle from "@/app/shared/ui/Subtitle";
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import UniversalList from "./shared/ui/UniversalList";
import countryFlags from './shared/lib/data/countries.json';
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { router, useNavigation, useRouter } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";
import { VStack } from "@/components/ui/vstack";
import { Pressable, SafeAreaView } from "react-native";

export default function LangSelectScreen() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const router = useRouter();
    const navigation = useNavigation();

    const handleSelect = (id: number) => {
        setSelectedId(id);
        router.push("age");
    };

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
                <Header progress={20} />
                <Card className="flex-1 bg-background-biscuit">
                    <Box className="flex-1 justify-between">
                        <Box className="mb-4">
                            <Title>Username, which language do you want to learn?</Title>
                            <Subtitle mb="6">Select a language</Subtitle>
                        </Box>

                        <VStack space="sm" reversed={false}>
                            {countryFlags.map((item) => (
                                <Pressable
                                    key={item.id}
                                    onPress={() => handleSelect(item.id)}
                                >
                                    <Box
                                        className={`flex-row items-center w-full text-typography-400 rounded-lg cursor-pointer p-4 leading-[1.5]
                                    ${item.id === selectedId ? "bg-background-coffe text-white" : "bg-white"}`}
                                    >
                                        <Text className="mr-4 w-6 h-6">{item.flag}</Text>
                                        <Text>{item.country}</Text>
                                    </Box>
                                </Pressable>
                            ))}
                        </VStack>
                    </Box>
                </Card>
            </Box>
        </SafeAreaView>
    );
}