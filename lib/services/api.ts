import { RefundOrders } from '@prisma/client';
import axios from 'axios';

interface ChangeOrderDecisionResponse {
    success: boolean;
    message: string;
    data: RefundOrders;
}
export const changeOrderDecision = async ({
    id,
    newDecision,
}: {
    id: string;
    newDecision: string;
}) => {
    return (
        await axios.post<ChangeOrderDecisionResponse>(
            `/api/refund_orders/${id}/change_decision`,
            {
                newDecision,
            },
        )
    ).data;
};

export const toggleOrderActivation = async ({
    id,
    newValue,
}: {
    id: string;
    newValue: boolean;
}) => {
    return (
        await axios.post<ChangeOrderDecisionResponse>(
            `/api/refund_orders/${id}/toggle_activation`,
            {
                newValue,
            },
        )
    ).data;
};
