"use client"
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@/components/ui/button"
import { useHeader, useSidebar } from "@/app/providers";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    const { headerText } = useHeader()
    const { toggle } = useSidebar()
    const { setTheme } = useTheme()
    return (
        <header className="bg-white dark:bg-sidebar border-b px-4 sm:px-6 lg:px-8 py-3 sm:py-4 items-center flex justify-between w-full min-h-[60px] sm:min-h-[70px] lg:min-h-[91px]">
            <div className="flex items-center gap-3">
                {/* Hamburger menu - mobile only */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden shrink-0"
                    onClick={toggle}
                >
                    <MenuIcon fontSize="small" />
                </Button>

                <div className="min-w-0">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#171717] dark: text-sidebar-foreground truncate">
                        Learning Dashboard
                    </h1>
                    <p className="text-xs sm:text-sm text-[#525252] dark:text-sidebar-foreground truncate">
                        {headerText}
                    </p>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
export default Header