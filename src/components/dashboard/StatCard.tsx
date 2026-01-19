import { activeTopics, weeklyProgress, stuckTopics, todayFocus } from "@/types/statcard";
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useAppSelector } from "@/app/hooks";
import {selectActiveTopicsCount,selectStuckTopicsCount} from "@/redux/features/topics/addTopics";

const StatCard = () => {

    const stuckCount = useAppSelector(selectStuckTopicsCount);
    const activeCount = useAppSelector(selectActiveTopicsCount);

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {activeTopics.map((prop, key) => {
                const Icon = prop.icon
                return (
                    <Card key={key} className="w-full hover:shadow-md min-h-[134px] sm:min-h-[170px] pt-4 sm:pt-6 pb-1">
                        <CardContent>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <Label className="text-[#737373] dark:text-sidebar-foreground text-xs sm:text-sm">{prop.title}</Label>
                                    <Label className="text-[#171717] dark:text-sidebar-foreground text-2xl sm:text-3xl">{activeCount}</Label>
                                    <Label className="text-[#a1a1a1] dark:text-sidebar-foreground text-xs mt-8">+2 this week</Label>
                                </div>
                                <Icon className="text-[#737373] dark:text-sidebar-foreground w-5 h-5 sm:w-6 sm:h-6">{prop.icon}</Icon>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
            {stuckTopics.map((prop, key) => {
                const Icon = prop.icon
                return (
                    <Card key={key} className="w-full hover:shadow-md min-h-[134px] sm:min-h-[170px] pt-4 sm:pt-6 pb-1">
                        <CardContent>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <Label className="text-[#737373] dark:text-sidebar-foreground text-xs sm:text-sm">{prop.title}</Label>
                                    <Label className="text-[#171717] dark:text-sidebar-foreground text-2xl sm:text-3xl">{stuckCount}</Label>
                                    <Label className="text-[#a1a1a1] dark:text-sidebar-foreground text-xs mt-8">+2 this week</Label>
                                </div>
                                <Icon className="text-[#737373] dark:text-sidebar-foreground w-5 h-5 sm:w-6 sm:h-6">{prop.icon}</Icon>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
            {weeklyProgress.map((prop, key) => {
                const Icon = prop.icon
                return (
                    <Card key={key} className="w-full hover:shadow-md min-h-[134px] sm:min-h-[170px] pt-4 sm:pt-6 pb-1">
                        <CardContent>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <Label className="text-[#737373] dark:text-sidebar-foreground text-xs sm:text-sm">{prop.title}</Label>
                                    <Label className="text-[#171717] dark:text-sidebar-foreground text-2xl sm:text-3xl">12 Hours</Label>
                                    <Label className="text-[#a1a1a1] dark:text-sidebar-foreground text-xs mt-8">+2 this week</Label>
                                </div>
                                <Icon className="text-[#737373] dark:text-sidebar-foreground w-5 h-5 sm:w-6 sm:h-6">{prop.icon}</Icon>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
            {todayFocus.map((prop, key) => {
                const Icon = prop.icon
                return (
                    <Card key={key} className="w-full hover:shadow-md min-h-[134px] sm:min-h-[170px] pt-4 sm:pt-6 pb-1">
                        <CardContent>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <Label className="text-[#737373] dark:text-sidebar-foreground text-xs sm:text-sm">{prop.title}</Label>
                                    <Label className="text-[#171717] dark:text-sidebar-foreground text-2xl sm:text-3xl">3</Label>
                                    <Label className="text-[#a1a1a1] dark:text-sidebar-foreground text-xs mt-8">+2 this week</Label>
                                </div>
                                <Icon className="text-[#737373] dark:text-sidebar-foreground w-5 h-5 sm:w-6 sm:h-6">{prop.icon}</Icon>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}

        </div>
    )
}
export default StatCard