// import { Switch } from '@/components/ui/switch';
// import { useToggleRefundOrderActivation } from '@/lib/services/mutations';

// interface OrderActiveSwitcherProps {
//     orderId: string;
//     currentValue: boolean;
// }
// export const OrderActiveSwitcher = ({
//     orderId,
//     currentValue,
// }: OrderActiveSwitcherProps) => {
//     const { mutateAsync: toggleActivation, isPending } =
//         useToggleRefundOrderActivation();

//     const handleToggle = async () => {
//         try {
//             await toggleActivation({ id: orderId, newValue: !currentValue });
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return <Switch checked={currentValue} onCheckedChange={handleToggle} />;
// };

import { Switch } from '@/components/ui/switch';
import { useToggleRefundOrderActivation } from '@/lib/services/mutations';
import { useState } from 'react';

interface OrderActiveSwitcherProps {
    orderId: string;
    currentValue: boolean;
}

export const OrderActiveSwitcher = ({
    orderId,
    currentValue,
}: OrderActiveSwitcherProps) => {
    const [optimisticValue, setOptimisticValue] = useState(currentValue);
    const { mutateAsync: toggleActivation, isPending } =
        useToggleRefundOrderActivation();

    const handleToggle = async () => {
        // Optimistically update the UI
        setOptimisticValue(!optimisticValue);

        try {
            await toggleActivation({ id: orderId, newValue: !optimisticValue });
        } catch (error) {
            // Revert the optimistic update on error
            setOptimisticValue(optimisticValue);
            console.error(error);
        }
    };

    return (
        <Switch
            checked={optimisticValue}
            onCheckedChange={handleToggle}
            disabled={isPending}
        />
    );
};
