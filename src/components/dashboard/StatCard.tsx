import {statCardProps} from "@/types/statcard";
import {Card,CardContent,CardDescription} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {buttons} from "@/types/sidebarButton";
const StatCard = () => {
    return (
       <div className="w-full flex items-center justify-center flex-row gap-6 px-4">
           {statCardProps.map((prop, key) =>{
               const Icon = prop.icon
               return (
                   <Card key={key} className="w-[286px] h-[134px] pt-6 pb-1 pr-6 pl-6">
                       <CardContent>
                           <div className="flex flex-row justify-between">
                           <div className="w-[286px] h-[134px] flex flex-col items-start gap-1">
                               <Label className="text-[#737373] text-sm">{prop.title}</Label>
                               <Label className="text-[#171717] text-3xl">4</Label>
                               <Label className="text-[#a1a1a1] text-xs">+2 this week</Label>
                           </div>
                           <Icon className="text-[#737373]">{prop.icon}</Icon>
                           </div>
                       </CardContent>
                   </Card>
               )
           })}
       </div>
    )
}
export default StatCard