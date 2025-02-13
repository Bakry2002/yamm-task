import Image from 'next/image';

export default function Home() {
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 sm:p-32">
            <main className="row-start-2 flex flex-col items-center gap-8 sm:items-center">
                <Image
                    className="dark:invert"
                    src="/yamm_logo.svg"
                    alt="yamm logo"
                    width={250}
                    height={50}
                    priority
                />
            </main>
        </div>
    );
}
