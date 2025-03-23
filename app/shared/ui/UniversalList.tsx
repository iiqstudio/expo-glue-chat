import { useState } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";

interface WithId {
    id: number;
}

interface Props<T extends WithId> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    selectedId?: any;
    onSelect?: (id: number) => void;
    itemClassName?: string;
}

export default function UniversalList<T extends WithId>({
    data,
    renderItem,
    selectedId,
    onSelect,
    itemClassName = "",
}: Props<T>) {
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
                        className={`flex-row items-center w-full text-typography-400 rounded-lg cursor-pointer p-4 leading-[1.5]
        ${item.id === internalSelectedId ? "bg-background-coffe text-white" : "bg-white"} 
        ${itemClassName}`}
                    >
                        {renderItem(item)}
                    </Box>
                </Box>
            ))}
        </VStack>
    );
}
