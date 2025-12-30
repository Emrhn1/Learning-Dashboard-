"use client"
import { buttons } from "@/types/sidebarButton";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useSidebar } from "@/app/providers";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
    const pathname = usePathname();
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:h-screen
            `}>
                <div className="flex items-center justify-between m-4 lg:m-6">
                    <h2 className="text-[#171717] font-bold text-lg">
                        Learning Hub
                    </h2>
                    {/* Close button - mobile only */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <CloseIcon fontSize="small" />
                    </Button>
                </div>
                <nav className="flex flex-col gap-1 px-3">
                    {buttons.map((button, index) => {
                        const Icon = button.icon
                        const isActive = pathname === button.url
                        return (
                            <Link href={button.url} key={index} onClick={() => setIsOpen(false)}>
                                <Button
                                    variant={isActive ? "secondary" : "ghost"}
                                    className="w-full cursor-pointer flex items-center gap-3 justify-start py-2 text-[#525252]"
                                >
                                    <Icon className={isActive ? "text-white w-4 h-4" : "text-[#525252] w-4 h-4 "} />
                                    <span className={isActive ? "text-white" : "text-[#525252]"}>{button.text}</span>
                                </Button>
                            </Link>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}
export default Sidebar