import db from '@/lib/db';

export async function GET() {
    try {
        const data = await db.refundOrders.findMany({
            include: {
                items: true,
            },
            orderBy: {
                created_at: 'desc',
            },
        });
        return Response.json({ success: true, data });
    } catch (error) {
        console.error(error);
        return Response.json({
            success: false,
            message: 'Failed to fetch refund orders',
            data: [],
        });
    }
}
