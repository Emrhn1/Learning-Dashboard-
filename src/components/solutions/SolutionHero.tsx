"use client"
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {useAppSelector} from "@/app/hooks";
import {selectSolutionsCount} from "@/redux/features/topics/addTopics";

const SolutionHero = () => {
    const solutionCount = useAppSelector(selectSolutionsCount);
    return (
        <Card className="bg-[#edfcf4] dark:bg-sidebar space-y-4">
            <CardContent className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                    <Label className="text-[14px] text-[#0D542B] dark:text-sidebar-foreground font-normal">Topics problems solved</Label>
                    <Label className="text-[30px] text-[#0D542B] dark:text-sidebar-foreground font-normal">{solutionCount}</Label>
                </div>
                <TaskAltIcon style={{marginTop:6,color:'#05DF72',fontSize:"48px"}}/>
            </CardContent>
        </Card>
    )
}
export default SolutionHero