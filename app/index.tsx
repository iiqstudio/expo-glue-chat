import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomeScreen() {
    return (
        <Box>
            <Button variant="solid" action="positive">
                <ButtonText>Home screen!</ButtonText>
            </Button>
        </Box>
    )
}