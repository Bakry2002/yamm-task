import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
    { params }: { params: { id: string } },
) {
    const { id } = await params;
    const body = await request.json();
    const { newValue } = body;

    if (!id) {
        console.log('Order ID is not defined');
        return Response.json(
            { success: false, message: `Order ID is not defined` },
            {
                status: 400,
            },
        );
    }

    try {
        const order = await db.refundOrders.findUnique({
            where: { id },
        });

        if (!order) {
            return NextResponse.json(
                { success: false, message: 'Order not found' },
                { status: 404 },
            );
        }

        const updatedOrder = await db.refundOrders.update({
            where: { id },
            data: {
                active: newValue,
            },
        });

        return NextResponse.json({
            success: true,
            message: updatedOrder.active
                ? 'Order activated'
                : 'Order deactivated',
            data: updatedOrder,
        });
    } catch (error) {
        console.log('error', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error toggling order activation',
            },
            { status: 500 },
        );
    }
}
