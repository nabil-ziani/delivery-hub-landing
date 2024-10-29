"use client"

import { createContext, useState, useEffect, PropsWithChildren } from "react"

interface ThemeContextProps {
    theme: string
    applyTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'dark',
    applyTheme: () => { }
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState('light')
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        const storedTheme = localStorage.getItem('theme') || 'light'
        setTheme(storedTheme)
    }, [])

    if (!isMounted) return (
        <>
            Loading...
        </>
    )

    const applyTheme = (theme: string) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, applyTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}