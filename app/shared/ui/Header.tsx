import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";

interface Props {
    progress?: number
}

export default function Header({ progress }: Props) {
    const router = useRouter();

    return (
        <Box className="mb-10">
            <Box className="flex-row items-center justify-between pr-4">
                <Box className="flex-row items-center cursor-pointer">
                    <Icon
                        as={ChevronLeftIcon}
                        className="text-typography-500 m-2 w-4 h-4"
                    />
                    <Pressable
                        onPress={() => router.back()}
                        accessibilityRole="button"
                        className="mr-4"
                    >
                        <Text className="text-sm font-medium leading-[14px]">Back</Text>
                    </Pressable>
                </Box>

                <Box className="flex-1 ml-4">
                    <Progress
                        value={progress}
                        size="md"
                        orientation="horizontal"
                        className="bg-background-0"
                    >
                        <ProgressFilledTrack className="bg-background-deepblue" />
                    </Progress>
                </Box>
            </Box>
        </Box>
    );
}