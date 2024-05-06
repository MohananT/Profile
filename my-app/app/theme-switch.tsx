"use client"

import { Moon, Sun } from "lucide-react"
import React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const handleButtonClick = () => {
        console.log('clicked')
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }

    return (
        <Button variant='ghost' size='icon' onClick={handleButtonClick}>
            <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
    )
}

export default ThemeSwitch;
