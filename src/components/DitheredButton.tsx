import classNames from "classnames";
import type { ReactNode } from "react";

import ditherButtonStyles from "@/styles/dither-button.module.css";

export default function DitheredButton({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <button
            type="button"
            className={classNames(
                ditherButtonStyles.ditherButton,
                "py-2 px-4 font-semibold rounded-lg shadow-md text-white focus:outline-none",
            )}
        >
            {children}
        </button>
    );
}
