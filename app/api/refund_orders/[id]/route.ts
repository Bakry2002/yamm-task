import db from '@/lib/db';

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
) {
    const { id } = params;

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
            include: { items: true },
        });

        if (!order) {
            return Response.json({
                success: false,
                message: 'Refund order not found',
                data: null,
            });
        }
        return Response.json({ success: true, data: order });
    } catch (error) {
        console.error(error);
        return Response.json({
            success: false,
            message: 'Failed to fetch refund order',
            data: [],
        });
    }
}
