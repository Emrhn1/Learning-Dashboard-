"use client"
import PersonIcon from '@mui/icons-material/Person';
import {Button} from "@/components/ui/button"
import {useHeader} from "@/app/providers";
const Header = () => {
    const {headerText} = useHeader()
    return (
        <header className="bg-white border-b px-8 py-4 items-center flex justify-between w-full h-[91px]">
            <div>
                <h1 className="text-2xl font-medium text-[#171717]">Learning Dashboard</h1>
                <p className="text-[14px] text-[#525252]">{headerText}</p>
            </div>
            <Button className="rounded-full" size={"icon"} variant={"outline"}>
                <PersonIcon fontSize={"small"}/>
            </Button>
        </header>
    )
}
export default Header