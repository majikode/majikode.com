import DitheredButton from "./DitheredButton";

export default function Dialog({
    children,
    ref,
}: { children: React.ReactNode; ref: React.RefObject<HTMLDialogElement | null> }) {
    return (
        <dialog ref={ref} className="max-w-4xl gap-4 p-6 rounded-md shadow-md bg-neutral-900 text-white">
            <div className="flex flex-col items-center gap-4">
                {children}
                <form method="dialog" className="self-end">
                    <DitheredButton type="submit">Close</DitheredButton>
                </form>
            </div>
        </dialog>
    );
}
