import {topicCards,levelStyles} from "@/types/topicCard";
import { Card, CardContent, CardDescription,CardTitle } from "@/components/ui/card"
import {Progress} from "@/components/ui/progress";
import {useEffect, useState} from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const TopicCard = () => {
    const [progress, setProgress] = useState(13)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {topicCards.map((prop, key) => {
                const style = levelStyles[prop.level];
                return (
                    <Card key={key} className="w-full hover:shadow-md min-h-[185px] p-5">
                        <CardContent>
                            <div className="flex flex-col items-start gap-3">
                                <CardTitle>{prop.title}</CardTitle>
                                <CardDescription>{prop.description}</CardDescription>
                                <div
                                    className={`px-3 py-1 rounded-md text-xs font-medium ${style.bg} ${style.text} ${style.border}`}>
                                    {prop.level}
                                </div>
                                    <Progress value={progress} className="w-full"/>
                                    <p className="text-xs sm:text-sm text-gray-500 text-right">
                                        {progress}%
                                    </p>
                                <div className="flex gap-2">
                                <CalendarTodayIcon fontSize={"inherit"}/>
                                <span className="text-[#a1a1a1] text-[12px]">Last Studied: Today</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
export default TopicCard;