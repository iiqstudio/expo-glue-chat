
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import cardData from '../app/shared/lib/data/langlevel.json';
import { Pressable, SafeAreaView } from "react-native";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Header from "./shared/ui/Header";

export default function LangLevelScreen() {
    const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
    const router = useRouter();
    const navigation = useNavigation();

    const handleSelect = (id: number) => {
        setSelectedId(id);
        console.log("Selected level:", id);
        router.push("gender");
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
            <Header progress={50} />
            <Box className="flex-1 px-6 py-8">
                <Title>How well do you speak English?</Title>
                <VStack space="sm" reversed={false}>
                    {cardData.map((item) => (
                        <Pressable
                            key={item.id}
                            onPress={() => handleSelect(item.id)}
                        >
                            <Box
                                className={`flex flex-row items-center text-typography-400 rounded-lg cursor-pointer p-4 leading-[1.5]
                    ${item.id === selectedId ? "bg-background-coffe text-white" : "bg-white"}
                    shadow-md`}
                            >
                                <Box className="flex-1 overflow-hidden pr-4">
                                    <Heading className="uppercase text-xs text-typography-creme mb-1 truncate">
                                        {item.title}
                                    </Heading>
                                    <Text className="text-typography-900 truncate">{item.text}</Text>
                                </Box>

                                {item.badge && (
                                    <Box className="flex-shrink-0">
                                        <Text className="bg-primary-500 text-white py-1 px-2 rounded-md text-sm whitespace-nowrap">
                                            {item.badge}
                                        </Text>
                                    </Box>
                                )}
                            </Box>
                        </Pressable>
                    ))}
                </VStack>
            </Box>
        </SafeAreaView>
    );
}