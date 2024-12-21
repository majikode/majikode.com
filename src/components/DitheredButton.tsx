import classNames from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import ditherButtonStyles from "@/styles/dither-button.module.css";

export default function DitheredButton({
    children,
    ...props
}: Readonly<ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }>) {
    return (
        <button
            type="button"
            className={classNames(
                ditherButtonStyles.ditherButton,
                "py-2 px-4 font-semibold rounded-lg shadow-md text-white focus:outline-none",
            )}
            {...props}
        >
            {children}
        </button>
    );
}
