import { Button, ButtonText } from '@/components/ui/button';


const PrimaryButton = ({ children, onClick, className = '', ...props }: any) => {
    return (
        <Button
            size="lg"
            className={`w-full bg-background-deepblue rounded-lg ${className}`}
            onClick={onClick}
            {...props}
        >
            <ButtonText className="font-semibold">{children}</ButtonText>
        </Button>
    );
};

export default PrimaryButton;
