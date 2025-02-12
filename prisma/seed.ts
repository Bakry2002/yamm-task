import { items, refundOrders } from '@/constants';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    for (const refundOrderData of refundOrders) {
        await prisma.refundOrders.create({
            data: {
                ...refundOrderData,
                items: {
                    create: refundOrderData.items,
                },
            },
        });
    }

    console.log('Seed data inserted successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
