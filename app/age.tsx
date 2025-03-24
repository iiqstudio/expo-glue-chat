import Header from "@/app/shared/ui/Header";
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "react-native";
import { Card } from "@/components/ui/card";

const ageData = [
    { id: 1, age: 'Under 18', smile: '🌱' },
    { id: 2, age: '18-24', smile: '☘️' },
    { id: 3, age: '25-34', smile: '🌿' },
    { id: 4, age: '35-44', smile: '🪴' },
    { id: 5, age: '45-54', smile: '🌳' },
    { id: 6, age: '55-64', smile: '🌲' },
    { id: 7, age: '65+', smile: '🎄' },
    { id: 8, age: 'Prefer not to say', smile: '👾' },
]

export default function AgeSelectScreen() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setSelectedId(id);
    };

    return (
        <Box>
            <Header progress={30} />
            <Card className="flex-1 bg-background-biscuit">
                <Title>What’s your age?</Title>
                <VStack space="sm" reversed={false}>
                    {ageData.map((item) => (
                        <Pressable
                            key={item.id}
                            onPress={() => handleSelect(item.id)}
                        >
                            <Box
                                className={`flex-row items-center w-full text-typography-400 rounded-lg cursor-pointer p-4 leading-[1.5]
                                    ${item.id === selectedId ? "bg-background-coffe text-white" : "bg-white"}`}
                            >
                                <Text className="mr-4 w-6 h-6">{item.smile}</Text>
                                <Text>{item.age}</Text>
                            </Box>
                        </Pressable>
                    ))}
                </VStack>
            </Card>
        </Box>
    );
}