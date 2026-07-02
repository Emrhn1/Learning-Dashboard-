import AddTopic from "@/components/Buttons/AddTopic"
import type {Hero as HeroContent} from "@/types/hero"

type HeroProps = HeroContent & {
    showAddTopic?: boolean;
}

const Hero = ({title,description, showAddTopic = true}: HeroProps) => {
    return (
        <div className="w-full mb-5 mt-5 sm:mt-8 dark:bg-sidebar flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-start sm:items-center">
            <div className="flex flex-col gap-1">
                <h1 className="text-lg sm:text-xl dark:text-sidebar-foreground text-[#171717] font-medium">{title}</h1>
                <span className="text-xs sm:text-sm dark:text-sidebar-foreground text-[#737373]">{description}</span>
            </div>
            {showAddTopic && <AddTopic />}
        </div>
    )

}
export default Hero
