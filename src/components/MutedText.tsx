import classNames from "classnames";
import type { ReactNode } from "react";

export default function MutedText({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
    return <p className={classNames("text-neutral-400", className)}>{children}</p>;
}
