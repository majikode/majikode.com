import Image from "next/image";

import Section from "@/components/Section";

import CaseStudyCover from "@/assets/case-study-financial-app.webp";
import DitheredLink from "@/components/DitheredLink";

export default function FinancialApp() {
    return (
        <main className="flex flex-col justify-center">
            <Section>
                <Image src={CaseStudyCover} alt="" unoptimized={true} />
                <div className="flex flex-col items-start gap-4">
                    <h1 className="font-bold text-xl">
                        Transactional Billing System: Under 30-Day Financial App Development
                    </h1>
                    <p>
                        In April 2024, we participated in a contract bid to develop a transactional billing system for a
                        law firm. The project had a three-month deadline, already compressed due to delays in data
                        warehouse integration. Though we weren't initially selected, by May 2024, the client returned
                        with an urgent request - their chosen agency had made minimal progress, and they needed delivery
                        within a month.
                    </p>
                    <p>The inherited codebase had significant challenges:</p>
                    <ul className="list-disc self-center mx-8 sm:mx-0">
                        <li>Invalid assumptions were made about events' data structures</li>
                        <li>Full table scans were required for each operation</li>
                        <li>Implementation was a loosely connected collection of Python scripts</li>
                    </ul>
                    <p>
                        Given our timeline, we decided on dumping the code and building a new system. Our solution
                        included:
                    </p>
                    <ul className="list-disc self-center mx-8 sm:mx-0">
                        <li>Celery canvas-based infrastructure for incremental data ingestion</li>
                        <li>React frontend for invoice management and transaction verification</li>
                        <li>Django backend API for system operations</li>
                    </ul>
                    <p>
                        Throughout development, we maintained continuous communication with the client to ensure the
                        shortest possible feedback loops. We implemented an incremental delivery approach, enabling the
                        client to begin testing features as soon as they were ready. This proved crucial in meeting the
                        aggressive timeline.
                    </p>
                    <p>
                        The project went live within our 30-day target. While we encountered some post-deployment
                        issues, all were resolved within a week. The client achieved their business objectives, and we
                        demonstrated our ability to deliver under pressure without compromising on quality.
                    </p>
                    <p>
                        This rapid delivery succeeded through pragmatic technical decisions, clear communication
                        channels, and focused incremental development. The client achieved their objectives, and we
                        demonstrated our ability to deliver quality work under pressure.
                    </p>
                </div>
                <DitheredLink href="/" internal={true} className="px-1 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <title>Go back</title>
                        <path
                            fill="currentColor"
                            d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"
                        />
                    </svg>
                </DitheredLink>
            </Section>
        </main>
    );
}
