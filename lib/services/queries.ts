import { RefundOrdersType } from '@/types';
import { RefundOrders } from '@prisma/client';
import axios from 'axios';

export interface GetRefundOrderResponse {
    success: boolean;
    data: RefundOrdersType[];
}
export const getRefundOrders = async () => {
    return (await axios.get<GetRefundOrderResponse>(`/api/refund_orders`)).data;
};
