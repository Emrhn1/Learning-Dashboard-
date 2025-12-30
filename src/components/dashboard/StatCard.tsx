import { statCardProps } from "@/types/statcard";
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { buttons } from "@/types/sidebarButton";

const StatCard = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {statCardProps.map((prop, key) => {
                const Icon = prop.icon
                return (
                    <Card key={key} className="w-full min-h-[134px] sm:min-h-[170px] pt-4 sm:pt-6 pb-1">
                        <CardContent>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-start gap-1">
                                    <Label className="text-[#737373] text-xs sm:text-sm">{prop.title}</Label>
                                    <Label className="text-[#171717] text-2xl sm:text-3xl">4</Label>
                                    <Label className="text-[#a1a1a1] text-xs mt-8">+2 this week</Label>
                                </div>
                                <Icon className="text-[#737373] w-5 h-5 sm:w-6 sm:h-6">{prop.icon}</Icon>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
export default StatCard