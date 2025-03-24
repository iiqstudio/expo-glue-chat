import Header from "@/app/shared/ui/Header";
import PrimaryButton from "@/app/shared/ui/PrimaryButton";
import Subtitle from "@/app/shared/ui/Subtitle";
import Title from "@/app/shared/ui/Title";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { ChevronDownIcon } from "@/components/ui/icon";
import {
    Select,
    SelectTrigger,
    SelectInput,
    SelectIcon,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicatorWrapper,
    SelectDragIndicator,
    SelectItem
} from "@/components/ui/select";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

export default function NativeLangScreen() {
    const router = useRouter();
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
                <Header progress={50} />
                <Card className="flex-1 justify-between bg-background-biscuit">
                    <Box>
                        <Title>What’s your native language?</Title>
                        <Subtitle mb="10">
                            Pick your native language so your tutor can better guide you if needed.
                        </Subtitle>
                        <Select>
                            <SelectTrigger variant="outline" className="flex-row justify-between bg-white border-none rounded-lg">
                                <SelectInput placeholder="Select option" />
                                <SelectIcon className="mr-3" as={ChevronDownIcon} />
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent>
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator />
                                    </SelectDragIndicatorWrapper>
                                    <SelectItem label="Russian" value="ux" />
                                    <SelectItem label="Spanish" value="web" />
                                    <SelectItem
                                        label="Franch"
                                        value="Cross Platform Development Process"
                                    />
                                    <SelectItem label="English" value="ui" isDisabled={true} />
                                    <SelectItem label="Turkish" value="backend" />
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </Box>
                    <PrimaryButton onPress={() => router.push('gender')}>Continue</PrimaryButton>
                </Card>

            </Box>
        </SafeAreaView>
    )
}