import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";

const work_sans = Work_Sans({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Majikode",
    description:
        "Majikode is a result-based product development consultancy specializing in meeting deadlines. Build your next digital product with us.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Script
                data-goatcounter="https://majikode.goatcounter.com/count"
                async
                src="//gc.zgo.at/count.js"
                strategy="beforeInteractive"
            />
            <body className={work_sans.className}>
                <div className="container mx-auto max-w-xl my-8">{children}</div>
            </body>
        </html>
    );
}
