export default function Section({ children }: Readonly<{ children: React.ReactNode }>) {
    return <section className="flex flex-col items-center gap-4 mx-4 sm:mx-0">{children}</section>;
}
