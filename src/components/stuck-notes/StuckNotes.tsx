import { Card, CardTitle, CardContent } from "@/components/ui/card"
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {useState} from "react";
import { saveSolution } from "@/redux/features/topics/addTopics";

const StuckNotesList = () => {
    const dispatch = useAppDispatch();
    
    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    
    const topics = useAppSelector((state) => state.topic.data)
    const stuckTopics = topics.filter(topic => topic.status === "Stuck")
    const [showSolutions, setShowSolutions] = useState<string | null>(null)
    const [solutionInputs, setSolutionInputs] = useState<{ [key: string]: string }>({});

    const handleAddSolution = (topicId: string) => {
        if (showSolutions === topicId) {
            const solutionText = solutionInputs[topicId];
            if (solutionText && solutionText.trim()) {
                dispatch(saveSolution({ id: topicId, solution: solutionText }));
                setSolutionInputs({ ...solutionInputs, [topicId]: '' });
                setShowSolutions(null);
            }
        } else {
            setShowSolutions(topicId);
        }
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {stuckTopics.length > 0 ? (
                stuckTopics.map((topic) => (
                    <Card key={topic.id} className="w-full flex flex-col hover:shadow-md p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <CardTitle className="text-xl font-semibold">
                                    {topic.title}
                                </CardTitle>
                                <span className="text-sm text-[#737373]">{topic.category}</span>
                            </div>               
                            <div className={`${topic.level==="Advanced" ? "bg-purple-100 text-purple-700" : topic.level==="Intermediate" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"} px-3 py-1 rounded-md text-sm font-medium`}>
                                {topic.level}
                            </div>
                        </div>
                        <Card className="w-full bg-[#FFF7ED] dark:bg-gray-800 border-none shadow-none">
                            <CardContent className="p-3">
                                <Label className="text-sm text-[#525252] dark:text-sidebar-foreground font-medium">
                                    Where I'm stuck:
                                </Label>
                                <p className="text-sm dark:text-sidebar-foreground mt-1">{topic.message}</p>
                            </CardContent>
                        </Card>
                        {showSolutions === topic.id && (
                            <div className="bg-green-50 border dark:bg-sidebar border-green-200 rounded-lg p-4 mb-4">
                                <p className="text-neutral-700 dark:text-sidebar-foreground text-sm mb-2">Solution / How I resolved it:</p>
                                <textarea
                                    value={solutionInputs[topic.id] || ''}
                                    onChange={(e) => setSolutionInputs({ ...solutionInputs, [topic.id]: e.target.value })}
                                    placeholder="Describe how you solved this problem..."
                                    rows={3}
                                    autoFocus
                                    className="w-full px-3 py-2 border border-green-200 dark:bg-sidebar rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 text-neutral-900 dark:text-sidebar-foreground placeholder:text-neutral-400"
                                />
                            </div>
                        )}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <CalendarTodayIcon 
                                    style={{ color: "#a1a1a1", fontSize: 16 }} 
                                />
                                <span className="text-sm text-[#a1a1a1]">
                                    Added {formatDate(topic.createdAt ? new Date(topic.createdAt) : new Date())}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <Button 
                                    onClick={()=> handleAddSolution(topic.id)}
                                    variant="outline" 
                                    className="text-sm"
                                >
                                      {showSolutions === topic.id ? 'Save Solution' : 'Add Solution'}
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))
            ) : (
                <Card className="w-full p-8 text-center">
                    <p className="dark:text-sidebar-foreground">No stuck topics yet.</p>
                </Card>
            )}
        </div>
    )
}

export default StuckNotesList
