import type React from "react"
import { cn } from "../../../utils/cn"

type WidgetBlockType = {
    children: React.ReactNode,
    className?: string
}

const WidgetBlock = ({ children, className }: WidgetBlockType) => {
    return (
        <div className={cn("border-y border-border py-3", className)}>
            {children}
        </div>
    )
}

export default WidgetBlock