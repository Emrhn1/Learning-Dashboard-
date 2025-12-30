"use client"
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@/components/ui/button"
import { useHeader, useSidebar } from "@/app/providers";

const Header = () => {
    const { headerText } = useHeader()
    const { toggle } = useSidebar()

    return (
        <header className="bg-white border-b px-4 sm:px-6 lg:px-8 py-3 sm:py-4 items-center flex justify-between w-full min-h-[60px] sm:min-h-[70px] lg:min-h-[91px]">
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
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#171717] truncate">
                        Learning Dashboard
                    </h1>
                    <p className="text-xs sm:text-sm text-[#525252] truncate">
                        {headerText}
                    </p>
                </div>
            </div>
            <Button className="rounded-full shrink-0" size={"icon"} variant={"outline"}>
                <PersonIcon fontSize={"small"} />
            </Button>
        </header>
    )
}
export default Header