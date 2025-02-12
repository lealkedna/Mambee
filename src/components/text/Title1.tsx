import { ReactNode } from "react"

interface Title1Props {
    children: ReactNode
    className?: string
}

export default function Title1({ children, className }: Title1Props) {
    return (
        <h1 className={`${className} text-3xl sm:text-5xl text-rosa font-kanit font-bold`}>{children}</h1>
    )
}