import classNames from "classnames";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import ditherButtonStyles from "@/styles/dither-button.module.css";

export default function DitheredLink({
    children,
    ...props
}: Readonly<AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }>) {
    return (
        <a
            className={classNames(
                ditherButtonStyles.ditherButton,
                "py-2 px-4 font-semibold rounded-lg shadow-md text-white focus:outline-none",
            )}
            {...props}
        >
            {children}
        </a>
    );
}
