"use client"

import { ChangeEvent, useContext } from 'react'
import { ThemeContext } from '@/context/theme-context'

import SunIcon from '@/public/icons/sun'
import MoonIcon from '@/public/icons/moon'

const ThemeController = () => {
    const { applyTheme } = useContext(ThemeContext)

    const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Clicked!')

        if (e.target.checked) {
            applyTheme('light')
        } else {
            applyTheme('dark')
        }
    }

    return (
        <label className="swap swap-rotate">
            <input type="checkbox" value="dark" className="theme-controller" onChange={handleThemeChange} />

            <SunIcon />
            <MoonIcon />
        </label>
    )
}

export default ThemeController