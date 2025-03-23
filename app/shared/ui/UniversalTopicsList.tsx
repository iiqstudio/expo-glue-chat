import { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

interface WithId {
    id: number;
    name: string;
    emoji: string;
}

interface Props<T extends WithId> {
    data: T[];
    onSelect?: (selectedIds: number[]) => void;
    itemClassName?: string;
}

export default function UniversalTopicsList<T extends WithId>({
    data,
    onSelect,
    itemClassName = "",
}: Props<T>) {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleSelect = (id: number) => {
        const newSelectedIds = selectedIds.includes(id)
            ? selectedIds.filter((selectedId) => selectedId !== id)
            : [...selectedIds, id];

        setSelectedIds(newSelectedIds);
        onSelect?.(newSelectedIds);
    };

    return (
        <div className="flex flex-wrap gap-2">
            {data.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                >
                    <Box
                        className={`flex flex-row items-center  rounded-lg cursor-pointer text-typography-400 border 
                        ${selectedIds.includes(item.id) ? "bg-background-coffe text-white" : "bg-white"} 
                        ${itemClassName}`}
                    >
                        <Text className="mr-1">{item.emoji}</Text>
                        <Text>{item.name}</Text>
                    </Box>
                </div>
            ))}
        </div>
    );
}
