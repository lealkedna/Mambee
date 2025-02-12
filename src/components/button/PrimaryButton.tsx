import { ReactNode } from "react"

interface PrimaryButtonProps {
    className?: string
    children: ReactNode
    onClick?: () => void
    isLoading?: boolean
}

export default function PrimaryButton({ className, children, onClick, isLoading }: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`mt-2 w-full rounded-xl text-xl text-center bg-rosa text-white p-2
            ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-hoverRosa"}
                ${className}`}
            type="button"
        >
            {isLoading ? "Carregando..." : children}
        </button>
    )
}