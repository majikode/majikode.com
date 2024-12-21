import Dialog from "@/components/Dialog";
import DitheredButton from "@/components/DitheredButton";
import Image from "next/image";
import React from "react";

import CaseStudyCover from "@/assets/case-study-ticketing.webp";

export default function TicketingCaseStudy() {
    const dialogRef = React.useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();

            // Initial attempt
            dialogRef.current.scrollTop = 0;

            // Safari fix using RAF
            const scrollToTop = () => {
                if (dialogRef.current) {
                    dialogRef.current.scrollTop = 0;
                }
            };

            requestAnimationFrame(() => {
                scrollToTop();
                // Double RAF for extra reliability
                requestAnimationFrame(scrollToTop);
            });
        }
    };

    return (
        <>
            <DitheredButton onClick={openDialog}>
                Legacy Ticketing System Rescue: Clearing Backlog, Performance, and Security Issues
            </DitheredButton>
            <Dialog ref={dialogRef}>
                <Image src={CaseStudyCover} alt="" unoptimized={true} />
                <div className="flex flex-col items-start gap-4">
                    <h1 className="font-bold text-xl">
                        Legacy Ticketing System Rescue: Clearing Backlog, Performance, and Security Issues
                    </h1>
                    <p>
                        In June 2024, a former client approached us with an urgent problem. Their event ticketing
                        system, previously maintained by an external vendor, had deteriorated significantly after being
                        brought in-house. The system faced frequent outages during peak ticket-sale periods and had
                        accumulated a substantial bug backlog. With a deadline of roughly six months to turn the
                        situation around, we accepted the challenge.
                    </p>
                    <p>However, the initial codebase assessment revealed technical debt far worse than anticipated:</p>
                    <ul className="list-disc self-center">
                        <li>Running on unsupported Django 2.1 with outdated dependencies</li>
                        <li>
                            Inconsistent, duplicated code implementations where similar features were coded differently
                            without purpose
                        </li>
                        <li>Minimal test coverage, with only 50% of existing tests passing</li>
                        <li>
                            A perplexing infrastructure setup with three redundant Nginx instances, suggesting
                            fundamental misunderstandings of containerization and Kubernetes principles
                        </li>
                    </ul>
                    <p>Our six-month rescue effort focused on three key areas:</p>
                    <ol className="list-decimal self-center">
                        <li>
                            <span className="font-bold">Modernization:</span> We upgraded all dependencies to supported
                            versions, replacing or removing unnecessary ones. Some dependencies were so superfluous that
                            their original purpose remained unclear. Others required complete in-house rewrites.
                        </li>
                        <li>
                            <span className="font-bold">Code Quality:</span> We unified components to resolve
                            permission-related bugs and implemented comprehensive testing for critical paths. Many bugs
                            stemmed from inconsistent behavior across different user permission levels.
                        </li>
                        <li>
                            <span className="font-bold">Infrastructure:</span> We streamlined the deployment
                            architecture, eliminating redundant services and optimizing for high-traffic periods.
                        </li>
                    </ol>
                    <p>
                        By the year-end deadline, we had achieved all objectives: clearing the entire bug backlog,
                        achieving zero downtime during peak traffic periods, and dramatically improving the system's
                        maintainability.
                    </p>
                </div>
            </Dialog>
        </>
    );
}
