"use client"
import StatCard from "@/components/dashboard/StatCard";
import Hero from "@/components/Hero/Hero"
import TopicCard from "@/components/dashboard/TopicCard";
import { useHeader } from "@/app/providers";
import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import type { Topic } from "@/redux/features/topics/addTopics";

export default function Home() {
  const { setHeaderText } = useHeader();
  useEffect(() => {
    setHeaderText("Track your progress and stay focused")
  }, [setHeaderText])

  const topics = useAppSelector((state) => state.topic.data)

  return (
<div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-full py-4 md:py-8 lg:py-8 dark:bg-sidebar">      <StatCard />
      <Hero title={"Your Learning Topics"} description={"Continue your learning journey"} />
      <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {topics.length > 0 ? (
          topics.map((topic: Topic) => (
            <TopicCard
              id={topic.id}
              key={topic.id}
              title={topic.title}
              category={topic.category}
              level={topic.level}
              message={topic.message}
              status={topic.status}
              progress={topic.progress}
              createdAt={topic.createdAt}
            />
          ))
        ) : (
          <p className="text-[#525252] font-semibold mt-10">No topics found...</p>
        )}
      </div>
    </div>
  );
}
