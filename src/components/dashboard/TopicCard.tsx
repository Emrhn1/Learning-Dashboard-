import {TopicCards} from "@/types/topicCard";
import { Card, CardContent, CardDescription,CardTitle } from "@/components/ui/card"
import {Progress} from "@/components/ui/progress";
import { useState} from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {levelStyles} from "@/types/topicCard";
import {LevelType} from "@/types/topicCard";
import {statusStyles} from "@/types/topicCard";
import {Status} from "@/types/topicCard";
import {Button} from "@/components/ui/button";
import ClearIcon from '@mui/icons-material/Clear';
import {useAppDispatch} from "@/app/hooks";
import {removeTopic} from "@/redux/features/topics/addTopics";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
interface TopicCardProps {
    id: string;
    title: string;
    category: string;
    level: LevelType;
    message?: string;
    status: Status;
    progress: number;
}

const TopicCard = ({id,title,category,level,status,progress}: TopicCardProps) => {
    const dispatch = useAppDispatch();
    const style = levelStyles[level]
    const statusStyle = statusStyles[status]
    const [progres, setProgress] = useState(progress);
    return (
                    <Card className="w-full hover:shadow-md min-h-[185px] p-5">
                        <CardContent>
                            <div className="flex flex-col relative items-start gap-3">
                                <CardTitle className="font-normal">{title}</CardTitle>
                                <CardDescription className="text-[#737373] dark:text-sidebar-foreground">{category}</CardDescription>
                                <div
                                    className={`px-3 mb-1 py-1 rounded-md text-xs font-medium ${style?.bg} ${style?.text} ${style?.border}`}>
                                    {level}
                                </div>
                                    <Progress value={progres} className="w-full"/>
                                    <p className={`text-xs sm:text-sm ${progres<50 ? "text-black" : progres>=55 && progres<75 ? "text-blue-600" : progres>=75 && progres<=100 ? "text-green-500" : "text-black" } dark:text-sidebar-foreground text-right`}>
                                        {progres}%
                                    </p>
                                <div className="flex items-center gap-2">
                                <Button className="w-4 h-7 hover:bg-gray-400 rounded-lg disabled:opacity-0 disabled:cursor-not-allowed" disabled={progres>=100} onClick={()=> setProgress(progres+5)}>+</Button>
                                <Button className="w-4 h-7 bg-blue-300 hover:bg-blue-200 disabled:opacity-0 disabled:cursor-not-allowedtext-black rounded-lg" disabled={progres<=0 || progres===100} onClick={()=> setProgress(progres-5)}>-</Button>
                                </div>
                                <div className="w-full flex justify-between items-center gap-2 mt-2">
                                <div className="flex gap-2">
                                <CalendarTodayIcon style={{color:"#a1a1a1"}} fontSize={"inherit"}/>
                                <span className="text-[#a1a1a1] dark:text-sidebar-foreground text-[12px]">Last Studied: Today</span>
                                </div>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <ClearIcon color="error" className="cursor-pointer" onClick={()=> dispatch(removeTopic(id))}/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Remove Topic</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                                <div className={`px-3 py-1 absolute top-0 right-0 rounded-md text-xs font-medium ${statusStyle?.bg} ${statusStyle?.text} ${statusStyle?.border}`}>
                                    {progres >= 100 ? "Completed" : status}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
    )
}
export default TopicCard;