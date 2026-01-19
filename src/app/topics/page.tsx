"use client"
import {useHeader} from "@/app/providers";
import {useEffect} from "react";
import TopicFilter from "@/components/topics/TopicFilter";
import Hero from "@/components/Hero/Hero"
import {useAppSelector} from "@/app/hooks";
import TopicCard from "@/components/dashboard/TopicCard";
import { selectFilteredTopics } from "@/redux/features/topics/addTopics";

const TopicsPage = () => {
    const {setHeaderText} = useHeader()
    useEffect(()=>{
        setHeaderText("Manage all your learning topics")
    })
    const filteredTopics = useAppSelector(selectFilteredTopics);
    const topics = useAppSelector((state)=> state.topic.data)
    return (
        <div className="px-20 h-full dark:bg-sidebar flex flex-col gap-6">
            <Hero title={"Topics"} description={"Manage and track all your learning topics"}/>
            <TopicFilter/>
            <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {topics.length > 0 ? (
                    filteredTopics.map((topic: any, index: number) => (
                            <TopicCard
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
                    <p className="text-[#525252] font-semibold">No topics found...</p>
                )}
            </div>
        </div>
    )
}
export default TopicsPage