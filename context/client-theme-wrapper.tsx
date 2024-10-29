"use client"

import { PropsWithChildren, useContext } from "react"
import { ThemeContext } from "@/context/theme-context"

const ClientThemeWrapper = ({ children }: PropsWithChildren) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div data-theme={theme}>
            {children}
        </div>
    )
}

export default ClientThemeWrapper