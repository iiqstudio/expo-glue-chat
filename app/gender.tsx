import Header from "@/app/shared/ui/Header";
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import UniversalList from "@/app/shared/ui/UniversalList";
import { useState } from "react";
import { Pressable, SafeAreaView } from "react-native";
import { Card } from "@/components/ui/card";
import { VStack } from "@/components/ui/vstack";
import { useRouter, useNavigation } from "expo-router";

const gendersData = [
    { id: 1, gender: 'Male', smile: '👨' },
    { id: 2, gender: 'Female', smile: '👩' },
    { id: 3, gender: 'Non-binary', smile: '🧑' },
    { id: 4, gender: 'Not to say', smile: '👾' },
]

export default function GenderSelectScreen() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const router = useRouter();
    const navigation = useNavigation();

    const handleSelect = (id: number) => {
        setSelectedId(id);
        router.push("topics");
    };

    return (
        <SafeAreaView className="flex-1 bg-background-biscuit">
            <Box className="flex-1">
                <Header progress={70} />
                <Card className="flex-1 bg-background-biscuit">
                    <Title>What’s your gender?</Title>
                    <VStack space="sm" reversed={false}>
                        {gendersData.map((item) => (
                            <Pressable
                                key={item.id}
                                onPress={() => handleSelect(item.id)}
                            >
                                <Box
                                    className={`flex-row items-center w-full text-typography-400 rounded-lg cursor-pointer p-4 leading-[1.5]
                                    ${item.id === selectedId ? "bg-background-coffe text-white" : "bg-white"}`}
                                >
                                    <Text className="mr-4 w-6 h-6">{item.smile}</Text>
                                    <Text>{item.gender}</Text>
                                </Box>
                            </Pressable>
                        ))}
                    </VStack>
                </Card>
            </Box>
        </SafeAreaView>
    );
}