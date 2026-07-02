import { Card, CardContent, CardDescription,CardTitle } from "@/components/ui/card"
import {Progress} from "@/components/ui/progress";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {levelStyles} from "@/types/topicCard";
import {LevelType} from "@/types/topicCard";
import {statusStyles} from "@/types/topicCard";
import {Status} from "@/types/topicCard";
import {Button} from "@/components/ui/button";
import ClearIcon from '@mui/icons-material/Clear';
import {useAppDispatch} from "@/app/hooks";
import {removeTopic, updateTopicProgress} from "@/redux/features/topics/addTopics";
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
    createdAt?: string;
}

const TopicCard = ({id,title,category,level,status,progress,createdAt}: TopicCardProps) => {
    const dispatch = useAppDispatch();
    const style = levelStyles[level]
    const visibleStatus = progress >= 100 ? "Completed" : status;
    const statusStyle = statusStyles[visibleStatus]
    const studiedDate = createdAt ? new Date(createdAt) : new Date();

    const updateProgress = (nextProgress: number) => {
        dispatch(updateTopicProgress({
            id,
            progress: Math.min(100, Math.max(0, nextProgress)),
        }));
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

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
                                    <Progress value={progress} className="w-full"/>
                                    <p className={`text-xs sm:text-sm ${progress<50 ? "text-black" : progress>=55 && progress<75 ? "text-blue-600" : progress>=75 && progress<=100 ? "text-green-500" : "text-black" } dark:text-sidebar-foreground text-right`}>
                                        {progress}%
                                    </p>
                                <div className="flex items-center gap-2">
                                <Button className="w-4 h-7 hover:bg-gray-400 rounded-lg disabled:opacity-0 disabled:cursor-not-allowed" disabled={progress>=100} onClick={()=> updateProgress(progress+5)}>+</Button>
                                <Button className="w-4 h-7 bg-blue-300 hover:bg-blue-200 disabled:opacity-0 disabled:cursor-not-allowed text-black rounded-lg" disabled={progress<=0} onClick={()=> updateProgress(progress-5)}>-</Button>
                                </div>
                                <div className="w-full flex justify-between items-center gap-2 mt-2">
                                <div className="flex gap-2">
                                <CalendarTodayIcon style={{color:"#a1a1a1"}} fontSize={"inherit"}/>
                                <span className="text-[#a1a1a1] dark:text-sidebar-foreground text-[12px]">Added: {formatDate(studiedDate)}</span>
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
                                    {visibleStatus}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
    )
}
export default TopicCard;
