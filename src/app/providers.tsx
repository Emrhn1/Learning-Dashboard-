'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type HeaderProps = {
    headerText: string;
    setHeaderText: (text: string) => void;
}

const HeaderContext = createContext<HeaderProps | undefined>(undefined)

export const HeaderProvider = ({children}: {children:ReactNode}) => {
    const [headerText,setHeaderText] = useState("")
    return (
        <HeaderContext.Provider value={{headerText,setHeaderText}}>
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