import Header from "@/app/shared/ui/Header";
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { useEffect, useState } from "react";
import topicsData from '../app/shared/lib/data/topics.json';
import { Pressable, SafeAreaView, ScrollView } from "react-native";
import { Card } from "@/components/ui/card";
import { useRouter, useNavigation } from "expo-router";
import Subtitle from "./shared/ui/Subtitle";

export default function TopicsSelectScreen() {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const router = useRouter();
    const navigation = useNavigation();

    const handleSelect = (id: number) => {
        const newSelectedIds = selectedIds.includes(id)
            ? selectedIds.filter((selectedId) => selectedId !== id)
            : [...selectedIds, id];

        setSelectedIds(newSelectedIds);
        router.push("learning-experience");
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
                <Header progress={80} />
                <Card className="flex-1 bg-background-biscuit">
                    <Title>Learning is easier when it’s fun</Title>
                    <Subtitle mb={4}>We pick up language faster when we talk about things we like</Subtitle>
                    <Subtitle mb={10}>Select at least 3 topics that excite you!</Subtitle>
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 8,
                            paddingHorizontal: 4,
                        }}
                        showsVerticalScrollIndicator={true}
                    >
                        {topicsData.map((item) => (
                            <Pressable
                                key={item.id}
                                onPress={() => handleSelect(item.id)}
                            >
                                <Box
                                    className={`flex flex-row items-center rounded-lg cursor-pointer text-typography-400 py-1 px-2
                                        ${selectedIds.includes(item.id) ? "bg-background-coffe text-white" : "bg-white"}`}
                                    style={{
                                        alignSelf: 'flex-start',
                                    }}
                                >
                                    <Text className="mr-1">{item.emoji}</Text>
                                    <Text>{item.name}</Text>
                                </Box>
                            </Pressable>
                        ))}
                    </ScrollView>
                </Card>
            </Box>
        </SafeAreaView>
    );
}