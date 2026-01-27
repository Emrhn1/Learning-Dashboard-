"use client"
import {useHeader} from "@/app/providers";
import {useEffect} from "react";
import TopicFilter from "@/components/topics/TopicFilter";
import Hero from "@/components/Hero/Hero"
import {useAppSelector} from "@/app/hooks";
import TopicCard from "@/components/dashboard/TopicCard";
import { selectFilteredTopics } from "@/redux/features/topics/addTopics";
import {Card} from "@/components/ui/card";

const TopicsPage = () => {
    const {setHeaderText} = useHeader()
    useEffect(()=>{
        setHeaderText("Manage all your learning topics")
    }, [setHeaderText])

    const filteredTopics = useAppSelector(selectFilteredTopics);
    const topics = useAppSelector((state)=> state.topic.data)

    return (
<div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-full py-4 md:py-6 dark:bg-sidebar flex flex-col gap-4 md:gap-6">            <Hero title={"Topics"} description={"Manage and track all your learning topics"}/>
            <TopicFilter/>
            <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {topics.length > 0 ? (
                    filteredTopics.map((topic: any, index: number) => (
                        <TopicCard
                            id={topic.id}
                            key={index}
                            title={topic.title}
                            category={topic.category}
                            level={topic.level}
                            message={topic.message}
                            status={topic.status}
                            progress={topic.progress}
                        />
                    ))
                ): (
                    <Card className="w-full p-8 text-center">
                        <p className="dark:text-sidebar-foreground">No stuck topics yet! 🎉</p>
                    </Card>
                )}
            </div>
        </div>
    )
}
export default TopicsPage