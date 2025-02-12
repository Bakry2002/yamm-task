import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { changeOrderDecision, toggleOrderActivation } from './api';

export const useChangeRefundOrderDecision = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            newDecision,
        }: {
            id: string;
            newDecision: string;
        }) =>
            changeOrderDecision({
                id,
                newDecision,
            }),

        onSuccess: (response) => {
            if (response.success) {
                toast.success(response.message);
            } else {
                console.log(
                    'error while changing refund order decision',
                    response.message,
                );
                toast.error(
                    'Something went wrong while changing refund order decision. Please try again.',
                );
            }
        },

        onError: (error: any) => {
            console.log(error);
            // Assuming the error object contains a response with a message
            const message =
                error.response?.data?.message ||
                'Something went wrong while changing refund order decision. Please try again.';
            // setErrorMessage(message);
            toast.error(message);
        },

        onSettled: (response, error, _) => {
            if (error) {
                console.log(error);
            } else {
                queryClient.invalidateQueries({
                    queryKey: ['refund_orders'],
                });
            }
        },
    });
};

export const useToggleRefundOrderActivation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, newValue }: { id: string; newValue: boolean }) =>
            toggleOrderActivation({
                id,
                newValue,
            }),

        onSuccess: (response) => {
            if (response.success) {
                toast.success(response.message);
            } else {
                console.log(
                    'error while toggling refund order activation',
                    response.message,
                );
                toast.error(
                    'Something went wrong while toggling refund order activation. Please try again.',
                );
            }
        },

        onError: (error: any) => {
            console.log(error);
            // Assuming the error object contains a response with a message
            const message =
                error.response?.data?.message ||
                'Something went wrong while toggling order activation. Please try again.';
            // setErrorMessage(message);
            toast.error(message);
        },

        onSettled: (response, error, _) => {
            if (error) {
                console.log(error);
            } else {
                queryClient.invalidateQueries({
                    queryKey: ['refund_orders'],
                });
            }
        },
    });
};
