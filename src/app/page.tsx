"use client"
import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import {useHeader} from "@/app/providers";
import {useEffect} from "react";
export default function Home() {
    const {setHeaderText} = useHeader();
    useEffect(()=> {
        setHeaderText("Track your progress and stay focused")
    })
  return (
      <div className="px-20 py-8">
    <StatCard/>
      </div>
  );
}
