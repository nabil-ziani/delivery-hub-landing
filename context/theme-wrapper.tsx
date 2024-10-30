"use client"

import { PropsWithChildren } from "react"
import { useTheme } from "@/context/theme-context"

const ClientThemeWrapper = ({ children }: PropsWithChildren) => {
    const { theme } = useTheme()

    return (
        <div data-theme={theme}>
            {children}
        </div>
    )
}

export default ClientThemeWrapper