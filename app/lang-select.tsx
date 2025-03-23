
import Header from "@/app/shared/ui/Header";
import Subtitle from "@/app/shared/ui/Subtitle";
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import UniversalList from "./shared/ui/UniversalList";
import countryFlags from './shared/lib/data/countries.json';
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { router } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";

export default function LangSelectScreen() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setSelectedId(id);
    };

    return (
        <Box className="flex-1">
            <Header progress={20} />
            <Card className="flex-1 bg-background-biscuit">
                <Box className="flex-1 justify-between">
                    <Box className="mb-4">
                        <Title>Username, which language do you want to learn?</Title>
                        <Subtitle mb="6">Select a language</Subtitle>
                    </Box>

                    <UniversalList
                        data={countryFlags}
                        selectedId={selectedId}
                        onSelect={handleSelect}
                        renderItem={({ flag, country }) => (
                            <>
                                <Text className="mr-4 w-6 h-6">{flag}</Text>
                                <Text>{country}</Text>
                            </>
                        )}
                    />
                </Box>
            </Card>
        </Box>
    );
}