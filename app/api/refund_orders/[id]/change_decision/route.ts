import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
    { params }: { params: { id: string } },
) {
    const body = await request.json();
    const { newDecision } = body;
    const { id } = await params;

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
                decicion: newDecision,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'Order decision updated successfully',
            data: updatedOrder,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'Error fetching user data',
            },
            { status: 500 },
        );
    }
}
