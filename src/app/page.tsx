"use client"

import StatCard from "@/components/dashboard/StatCard";
import Hero from "@/components/Hero/Hero"
import TopicCard from "@/components/dashboard/TopicCard";
import { useHeader } from "@/app/providers";
import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
export default function Home() {
  const { setHeaderText } = useHeader();
  useEffect(() => {
    setHeaderText("Track your progress and stay focused")
  })

  const topics = useAppSelector((state:any)=> state.topic.data)

  return (
    <div className="px-20 py-8">
      <StatCard />
      <Hero title={"Your Learning Topics"} description={"Continue your learning journey"} />
      <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {topics.map((topic: any, index: number) => (
          <TopicCard
            key={index}
            title={topic.title}
            category={topic.category}
            level={topic.level}
            message={topic.message}
            status={topic.status}
          />
        ))}
      </div>
    </div>
  );
}
