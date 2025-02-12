import { ReactNode } from "react"

interface CardProps {
    className?: string
    children: ReactNode
}

export default function Card({ className, children }: CardProps) {
    return (
        <div
            className={`bg-fundoClaro rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.1)] ${className || ""}`}
        >
            {children}
        </div>
    );
}