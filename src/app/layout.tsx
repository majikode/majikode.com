import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";

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
            <body className={work_sans.className}>
                <PlausibleProvider
                    domain="majikode.com"
                    customDomain="https://plausible.royal-puffin.net"
                    trackOutboundLinks={true}
                    selfHosted={true}
                >
                    <div className="container mx-auto max-w-xl my-8">{children}</div>
                </PlausibleProvider>
            </body>
        </html>
    );
}
