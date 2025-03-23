import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useState } from "react";

interface CardItem {
    id: number;
    title: string;
    text: string;
    badge?: string;
}

interface Props {
    data: CardItem[];
    selectedId?: number;
    onSelect?: (id: number) => void;
    itemClassName?: string;
}

export default function UniversalCardList({
    data,
    selectedId,
    onSelect,
    itemClassName = "",
}: Props) {
    const [internalSelectedId, setInternalSelectedId] = useState<number | undefined>(selectedId);

    const handleSelect = (id: number) => {
        setInternalSelectedId(id);
        onSelect?.(id);
    };

    return (
        <VStack space="sm" reversed={false}>
            {data.map((item) => (
                <Box key={item.id} onClick={() => handleSelect(item.id)}>
                    <Box
                        className={`flex flex-row items-center w-full text-typography-400 rounded-lg cursor-pointer p-4 leading-[1.5]
                            ${item.id === internalSelectedId ? "bg-background-coffe text-white" : "bg-white"}
                            ${itemClassName}`}
                    >
                        {/* Левая часть: заголовок и текст */}
                        <Box className="flex-grow overflow-hidden">
                            <Heading className="uppercase text-xs text-typography-creme mb-1 truncate">
                                {item.title}
                            </Heading>
                            <Text className="text-typography-900 truncate">{item.text}</Text>
                        </Box>

                        {/* Правая часть: бейдж */}
                        {item.badge && (
                            <Box className="ml-4 flex-shrink-0">
                                <Text className="bg-primary-500 text-white py-1 px-2 rounded-md text-sm whitespace-nowrap">
                                    {item.badge}
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Box>
            ))}
        </VStack>
    );
}