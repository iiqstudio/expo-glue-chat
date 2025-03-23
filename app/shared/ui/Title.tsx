import { Heading } from "@/components/ui/heading";

interface Props {
    children: React.ReactNode;
    marginBottom?: string;
}

export default function Title({ children, marginBottom = "mb-3" }: Props) {
    return (
        <Heading className={`font-bold text-2xl text-typography-900 tracking-[0.01em] ${marginBottom}`}>
            {children}
        </Heading>
    );
}
