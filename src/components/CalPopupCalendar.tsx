"use client";

import { getCalApi } from "@calcom/embed-react";
import { ReactNode, useEffect } from "react";

export default function CalPopupCalendar({ children }: Readonly<{ children: ReactNode }>) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "majikode-discovery" });
            cal("ui", {
                styles: { branding: { brandColor: "#ecd300" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);
    return (
        <div
            data-cal-namespace="majikode-discovery"
            data-cal-link="kamil-marut/majikode-discovery"
            data-cal-config='{"layout":"month_view"}'
        >
            {children}
        </div>
    );
}
