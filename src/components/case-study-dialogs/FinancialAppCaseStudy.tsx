import Dialog from "@/components/Dialog";
import DitheredButton from "@/components/DitheredButton";
import Image from "next/image";
import React from "react";

import CaseStudyCover from "@/assets/case-study-financial-app.webp";

export default function FinancialAppCaseStudy() {
    const dialogRef = React.useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
            dialogRef.current.scrollTop = 0;
        }
    };

    return (
        <>
            <DitheredButton onClick={openDialog}>
                Transactional Billing System: Under 30-Day Financial App Development
            </DitheredButton>
            <Dialog ref={dialogRef}>
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
                    <ul className="list-disc self-center">
                        <li>Invalid assumptions were made about events' data structures</li>
                        <li>Full table scans were required for each operation</li>
                        <li>Implementation was a loosely connected collection of Python scripts</li>
                    </ul>
                    <p>
                        Given our timeline, we decided on dumping the code and building a new system. Our solution
                        included:
                    </p>
                    <ul className="list-disc self-center">
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
            </Dialog>
        </>
    );
}
