import {TopicCards} from "@/types/topicCard";
import { Card, CardContent, CardDescription,CardTitle } from "@/components/ui/card"
import {Progress} from "@/components/ui/progress";
import {useEffect, useState} from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {levelStyles} from "@/types/topicCard";
import {any} from "prop-types";
import {LevelType} from "@/types/topicCard";
import {statusStyles} from "@/types/topicCard";
import {Status} from "@/types/topicCard";
interface TopicCardProps {
    title: string;
    category: string;
    level: LevelType;
    message?: string;
    status: Status;
}

const TopicCard = ({title,category,level,status}: TopicCardProps) => {
    const [progress, setProgress] = useState(13)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    const style = levelStyles[level]
    const statusStyle = statusStyles[status]
    return (
                    <Card className="w-full hover:shadow-md min-h-[185px] p-5">
                        <CardContent>
                            <div className="flex flex-col relative items-start gap-3">
                                <CardTitle className="font-normal">{title}</CardTitle>
                                <CardDescription className="text-[#737373]">{category}</CardDescription>
                                <div
                                    className={`px-3 mb-1 py-1 rounded-md text-xs font-medium ${style?.bg} ${style?.text} ${style?.border}`}>
                                    {level}
                                </div>
                                    <Progress value={progress} className="w-full"/>
                                    <p className="text-xs sm:text-sm text-gray-500 text-right">
                                        {progress}%
                                    </p>
                                <div className="flex gap-2">
                                <CalendarTodayIcon style={{color:"#a1a1a1"}} fontSize={"inherit"}/>
                                <span className="text-[#a1a1a1] text-[12px]">Last Studied: Today</span>
                                </div>
                                <div className={`px-3 py-1 absolute top-0 right-0 rounded-md text-xs font-medium ${statusStyle?.bg} ${statusStyle?.text} ${statusStyle?.border}`}>
                                    {status}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
    )
}
export default TopicCard;