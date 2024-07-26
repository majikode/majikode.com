import classNames from "classnames";

export default function SectionHeading({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return <h2 className={classNames("text-lg font-bold", className)}>{children}</h2>;
}
