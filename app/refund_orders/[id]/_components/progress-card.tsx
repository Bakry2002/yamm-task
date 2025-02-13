import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LucideIcon } from 'lucide-react';

interface ProgressCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    indicatorColor?: string;
}
export const ProgressCard = ({
    title,
    value,
    indicatorColor,
    icon: Icon,
}: ProgressCardProps) => {
    return (
        <Card className="p-0">
            <CardContent className="flex h-full flex-col gap-y-4 p-2">
                <div className="flex flex-1 flex-col gap-y-1">
                    <Icon
                        className="h-6 w-6 text-accent-foreground"
                        strokeWidth={1.5}
                    />
                    <p className="text-sm font-medium">{title}</p>
                </div>
                <Progress
                    value={value}
                    indicatorColor={indicatorColor && indicatorColor}
                    className="h-1"
                />
            </CardContent>
        </Card>
    );
};
