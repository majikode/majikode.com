export default function Section({ children }: Readonly<{ children: React.ReactNode }>) {
    return <section className="flex flex-col items-center gap-4">{children}</section>;
}
