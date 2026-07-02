"use client";

import { useEffect } from "react";
import { useHeader } from "@/app/providers";
import { useAppSelector } from "@/app/hooks";
import Hero from "@/components/Hero/Hero";
import TopicCard from "@/components/dashboard/TopicCard";
import TopicFilter from "@/components/topics/TopicFilter";
import { Card } from "@/components/ui/card";
import { selectFilteredTopics, type Topic } from "@/redux/features/topics/addTopics";

const TopicsPage = () => {
  const { setHeaderText } = useHeader();
  const filteredTopics = useAppSelector(selectFilteredTopics);
  const topics = useAppSelector((state) => state.topic.data);

  useEffect(() => {
    setHeaderText("Manage all your learning topics");
  }, [setHeaderText]);

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-full py-4 md:py-6 dark:bg-sidebar flex flex-col gap-4 md:gap-6">
      <Hero title="Topics" description="Manage and track all your learning topics" />
      <TopicFilter />
      <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {topics.length > 0 ? (
          filteredTopics.map((topic: Topic) => (
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
          <Card className="w-full p-8 text-center">
            <p className="dark:text-sidebar-foreground">No topics yet.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TopicsPage;
