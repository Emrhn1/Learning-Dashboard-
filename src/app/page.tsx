"use client"
import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import Hero from "@/components/Hero/Hero"
import TopicCard from "@/components/dashboard/TopicCard";
import { useHeader } from "@/app/providers";
import { useEffect } from "react";
export default function Home() {
  const { setHeaderText } = useHeader();
  useEffect(() => {
    setHeaderText("Track your progress and stay focused")
  })
  return (
    <div className="px-20 py-8">
      <StatCard />
      <Hero title={"Your Learning Topics"} description={"Continue your learning journey"} />
      <TopicCard/>
    </div>
  );
}
