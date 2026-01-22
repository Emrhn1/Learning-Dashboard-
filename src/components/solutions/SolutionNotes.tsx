"use client"
import {useAppSelector} from "@/app/hooks";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const SolutionNotes = () => {

    const topics = useAppSelector((state) => state.topic.data)
    const solutionsTopic = topics.filter(topic => topic.solution)
     
    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    return (
         <div className="w-full flex flex-col mt-4 gap-6">
            {solutionsTopic.length > 0 ? (
                solutionsTopic.map((topic, index) => (
                    <Card key={index} className="w-full flex flex-col hover:shadow-md p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <CardTitle className="text-xl font-semibold">
                                    {topic.title}
                                </CardTitle>
                                <span className="text-sm text-[#737373] dark:text-sidebar-foreground">{topic.category}</span>
                            </div>               
                            <div className={`${
                                topic.level === "Advanced" 
                                    ? "bg-purple-100 text-purple-700 border-purple-200" 
                                    : topic.level === "Intermediate" 
                                    ? "bg-blue-100 text-blue-700 border-blue-200" 
                                    : "bg-green-100 text-green-700 border-green-200"
                            } px-3 py-1 rounded-md text-sm font-medium border`}>
                                {topic.level}
                            </div>
                        </div>

                        {/* Where I was stuck */}
                        <Card className="w-full bg-[#FFF7ED] dark:bg-gray-800 border-none shadow-none">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg">📖</span>
                                    <Label className="text-sm text-[#0D542B] dark:text-sidebar-foreground font-semibold">
                                        Where I was stuck:
                                    </Label>
                                </div>
                                <p className="text-sm text-[#525252] dark:text-sidebar-foreground">
                                    {topic.message}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="w-full bg-[#edfcf4] dark:bg-gray-700 border-none shadow-none">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg">✅</span>
                                    <Label className="text-sm text-[#0D542B] dark:text-sidebar-foreground font-semibold">
                                        How I solved it:
                                    </Label>
                                </div>
                                <p className="text-sm text-[#525252] dark:text-sidebar-foreground">
                                    {topic.solution}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Footer with date */}
                        <div className="flex items-center gap-2">
                            <CalendarTodayIcon 
                                style={{ color: "#a1a1a1", fontSize: 16 }} 
                            />
                            <span className="text-sm text-[#a1a1a1] dark:text-sidebar-foreground">
                                Resolved {formatDate(new Date())}
                            </span>
                        </div>
                    </Card>
                ))
            ) : (
                <Card className="w-full p-8 mt-4 text-center">
                    <p className="text-[#737373] dark:text-sidebar-foreground">No solutions yet. Keep working on those stuck topics! 💪</p>
                </Card>
            )}
        </div>
    )
}
export default SolutionNotes;