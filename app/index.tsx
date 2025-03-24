import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Input, InputField } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Header from "./shared/ui/Header";
import { useRouter } from "expo-router";
import PrimaryButton from "./shared/ui/PrimaryButton";
import Subtitle from "./shared/ui/Subtitle";
import Title from "./shared/ui/Title";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { SafeAreaView } from "react-native";
import WelcomeToAiScreen from "./welcome";


export default function HomeScreen() {
    return (
        <WelcomeToAiScreen />
    )
}