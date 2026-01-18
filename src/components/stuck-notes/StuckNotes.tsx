import { Card, CardTitle, CardContent } from "@/components/ui/card"
import { useAppSelector } from "@/app/hooks";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {top} from "@popperjs/core";

const StuckNotesList = () => {

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    
    const topics = useAppSelector((state) => state.topic.data)
    
    return (
        <div className="w-full flex flex-col gap-6">
            {topics.map((topic, index) => (
                <Card key={index} className="w-full flex flex-col p-6">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-xl font-semibold">
                                {topic.status === "Stuck" && topic.title}
                            </CardTitle>
                            <span className="text-sm text-[#737373]">{topic.category}</span>
                        </div>               
                        <div className={`${topic.level==="Advanced" ? "bg-purple-100 text-purple-700" : topic.level==="Intermediate" && "bg-blue-100 text-blue-700"} px-3 py-1 rounded-md text-sm font-medium`}>
                            {topic.level}
                        </div>
                    </div>
                    <Card className="w-full bg-[#FFF7ED] border-none shadow-none">
                        <CardContent className="p-3">
                            <Label className="text-sm text-[#525252] font-medium">
                                Where I'm stuck:
                            </Label>
                            <p className="text-sm text-[#171717] mt-1">{topic.message}</p>
                        </CardContent>
                    </Card>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <CalendarTodayIcon 
                                style={{ color: "#a1a1a1", fontSize: 16 }} 
                            />
                            <span className="text-sm text-[#a1a1a1]">
                                Added {formatDate(new Date())}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <Button 
                                variant="outline" 
                                className="text-sm"
                            >
                                Add Solution
                            </Button>
                            <Button 
                                className="bg-[#16A34A] hover:bg-[#15803D] text-white text-sm"
                            >
                                Mark Resolved
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default StuckNotesList