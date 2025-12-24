"use client"
import { buttons } from "@/types/sidebarButton";
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {usePathname} from "next/navigation";
const Sidebar = () => {
   const pathname = usePathname();
    return (
        <aside className="w-64 flex flex-col h-screen bg-gray-200">
              <h2 className="m-6 text-[#171717] font-bold text-lg">
                  Learning Hub
              </h2>
            <nav className="flex flex-col gap-1 px-3">
                {buttons.map((button,index)=> {
                    const Icon = button.icon
                    const isActive = pathname === button.url
                    return (
                       <Button
                       variant={isActive ? "secondary" : "ghost"}
                       key={index}
                       className="w-full flex items-center gap-3 justify-start py-2 text-[#525252]"
                       >
                           <Icon className={isActive ? "text-white w-4 h-4" : "text-[#525252] w-4 h-4 "} />
                           <Link href={button.url}>
                               <span className={isActive ? "text-white" : "text-[#525252]"}>{button.text}</span>
                           </Link>
                       </Button>

                    )
                })}
            </nav>
        </aside>
    )
}
export default Sidebar