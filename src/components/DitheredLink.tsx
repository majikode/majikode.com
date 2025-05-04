import classNames from "classnames";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import ditherButtonStyles from "@/styles/dither-button.module.css";

type DitheredLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    href: string;
    internal?: boolean;
    className?: string;
};

export default function DitheredLink({
    children,
    internal = false,
    href,
    className,
    ...props
}: Readonly<DitheredLinkProps>) {
    const combinedClassName = classNames(
        ditherButtonStyles.ditherButton,
        "py-2 px-4 font-semibold rounded-lg shadow-md text-white text-center focus:outline-none",
        className,
    );

    if (internal) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <a className={combinedClassName} {...props}>
            {children}
        </a>
    );
}
