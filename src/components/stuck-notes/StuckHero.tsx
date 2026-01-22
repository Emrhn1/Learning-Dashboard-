import { Card, CardTitle, CardContent } from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { useAppSelector } from "@/app/hooks";
import {selectStuckTopicsCount} from "@/redux/features/topics/addTopics";
const StuckHero = () => {
    const stuckCount = useAppSelector(selectStuckTopicsCount);
    return (
       <Card className="bg-[#FFF7ED] dark:bg-sidebar space-y-4">
           <CardContent className="flex flex-row justify-between">
               <div className="flex flex-col gap-1">
               <Label className="text-[14px]  font-normal text-[#7E2A0C] dark:text-sidebar-foreground">Topics needing attention</Label>
               <Label className="text-[30px] font-normal text-[#7E2A0C] dark:text-sidebar-foreground  ">{stuckCount}</Label>
               </div>
               <LightbulbOutlinedIcon style={{ fontSize: "48px" }}
                                      className="text-[#FF8904]"/>
           </CardContent>
       </Card>
    )
}
export default StuckHero