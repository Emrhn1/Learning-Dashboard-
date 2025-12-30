'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type HeaderProps = {
    headerText: string;
    setHeaderText: (text: string) => void;
}

const HeaderContext = createContext<HeaderProps | undefined>(undefined)

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
    const [headerText, setHeaderText] = useState("")
    return (
        <HeaderContext.Provider value={{ headerText, setHeaderText }}>
            {children}
        </HeaderContext.Provider>
    )
}
export function useHeader() {
    const context = useContext(HeaderContext)
    if (!context) {
        throw new Error('useHeader must be used within HeaderProvider')
    }
    return context
}

// Sidebar Context for mobile toggle
type SidebarProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    toggle: () => void;
}

const SidebarContext = createContext<SidebarProps | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(prev => !prev)
    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, toggle }}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error('useSidebar must be used within SidebarProvider')
    }
    return context
}