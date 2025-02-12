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
