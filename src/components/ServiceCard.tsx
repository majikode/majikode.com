import { ReactNode } from "react";

export default function ServiceCard({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="border-2 border-[#fdb700] rounded-lg shadow-md p-2 m-2 text-center justify-center flex items-center gap-2">
            {children}
        </div>
    );
}
