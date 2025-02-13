import { RefundOrdersType } from '@/types';
import axios from 'axios';

export interface GetRefundOrdersResponse {
    success: boolean;
    data: RefundOrdersType[];
}
export interface GetRefundOrderResponse {
    success: boolean;
    data: RefundOrdersType;
}
export const getRefundOrders = async () => {
    return (await axios.get<GetRefundOrdersResponse>(`/api/refund_orders`))
        .data;
};

export const getRefundOrder = async (id: string) => {
    return (await axios.get<GetRefundOrderResponse>(`/api/refund_orders/${id}`))
        .data.data;
};
