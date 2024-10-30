"use client"

import { createContext, useState, useEffect, PropsWithChildren, useContext } from "react"

interface ThemeContextProps {
    theme: string
    applyTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'dark',
    applyTheme: () => { }
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState('dark')
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        const storedTheme = localStorage.getItem('theme') || 'light'
        setTheme(storedTheme)
    }, [])

    if (!isMounted) return (
        <div className="flex h-screen justify-center items-center">
            Loading...
        </div>
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

// Hook om te gebruiken in componenten
export const useTheme = () => {
    const context = useContext(ThemeContext)

    return context
}