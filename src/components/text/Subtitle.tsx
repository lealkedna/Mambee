import { ReactNode } from "react"

interface SubtitleProps {
    children: ReactNode
    className?: string
}

export default function Subtitle({ children, className }: SubtitleProps) {
    return (
        <h1 className={`${className} font-kanit font-bold text-lg`}>{children}</h1>
    )
}