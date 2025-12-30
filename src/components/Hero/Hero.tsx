import AddTopic from "@/components/Buttons/AddTopic"
import {Hero} from "@/types/hero"
const Hero = ({title,description}: Hero) => {
    return (
        <div className="w-full mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-start sm:items-center">
            <div className="flex flex-col gap-1">
                <h1 className="text-lg sm:text-xl text-[#171717] font-semibold">{title}</h1>
                <span className="text-xs sm:text-sm text-[#737373]">{description}</span>
            </div>
            <AddTopic />
        </div>
    )

}
export default Hero