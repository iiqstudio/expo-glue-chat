import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";;
import { useNavigation } from "expo-router";
import Subtitle from "./shared/ui/Subtitle";
import Title from "./shared/ui/Title";
import Header from "./shared/ui/Header";
import { SafeAreaView, View } from "react-native";
import { useEffect } from "react";
import { Image } from "@/components/ui/image";

export default function LearningExperienceScreen() {
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
        <View className="flex-1 bg-background-biscuit">
            <Box className="flex-1">
                <Header progress={85} />
                <Card className="flex-1 bg-background-biscuit">
                    <Title>We’re setting up your perfect learning experience </Title>
                    <Subtitle>
                        Your tutor now knows your level and native language. Every conversation will be adapted to help you improve the way you need
                    </Subtitle>
                </Card>
                <Box className="flex items-center justify-center w-full">
                    <Image
                        source={require("../assets/grandpa.png")}
                        alt="welcome"
                        size="none"
                        resizeMode="contain"
                    />
                </Box>
            </Box>
        </View>
    );
}