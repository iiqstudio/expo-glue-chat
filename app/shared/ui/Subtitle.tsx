import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

interface Props {
    children: React.ReactNode;
    mb?: any
}

export default function Subtitle({ children, mb }: Props) {
    return (
        <Box className={`mb-${mb}`}>
            <Text className="text-typography-900 text-md">{children}</Text>
        </Box>
    );
}