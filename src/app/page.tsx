"use client"
import StatCard from "@/components/dashboard/StatCard";
import Hero from "@/components/Hero/Hero"
import TopicCard from "@/components/dashboard/TopicCard";
import { useHeader } from "@/app/providers";
import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import { useAppDispatch } from "@/app/hooks";
import { hydrateTopics } from "@/redux/features/topics/addTopics";
export default function Home() {
  const { setHeaderText } = useHeader();
  useEffect(() => {
    setHeaderText("Track your progress and stay focused")
  })

  const topics = useAppSelector((state)=> state.topic.data)
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedTopics = localStorage.getItem("topic");
    if (storedTopics) {
      dispatch(hydrateTopics(JSON.parse(storedTopics)));
    }
  }, [dispatch]);


  return (
    <div className="px-4 h-full sm:px-8 md:px-12 lg:px-16 xl:px-20 h-full py-4 md:py-6 lg:py-8 dark:bg-sidebar">
      <StatCard />
      <Hero title={"Your Learning Topics"} description={"Continue your learning journey"} />
      <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {topics.length > 0 ? (
              topics.map((topic: any, index: number) => (
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
          ) : (
              <p className="text-[#525252] font-semibold mt-10">No topics found...</p>
          )}
      </div>
    </div>
  );
}
