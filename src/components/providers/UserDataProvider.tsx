"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { hydrateTopics } from "@/redux/features/topics/addTopics";
import { hydrateCards } from "@/redux/features/reflection";

const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded } = useUser();
  const dispatch = useAppDispatch();
  const topics = useAppSelector((state) => state.topic.data);
  const cards = useAppSelector((state) => state.cards.cards);
  const hydratedUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !user?.id || hydratedUserId.current === user.id) {
      return;
    }

    try {
      const storedTopics = localStorage.getItem(`topic_${user.id}`);
      dispatch(hydrateTopics(storedTopics ? JSON.parse(storedTopics) : []));
    } catch {
      dispatch(hydrateTopics([]));
    }

    try {
      const storedCards = localStorage.getItem(`cards_${user.id}`);
      dispatch(hydrateCards(storedCards ? JSON.parse(storedCards) : []));
    } catch {
      dispatch(hydrateCards([]));
    }

    hydratedUserId.current = user.id;
  }, [isLoaded, user?.id, dispatch]);

  useEffect(() => {
    if (user?.id && hydratedUserId.current === user.id) {
      try {
        localStorage.setItem(`topic_${user.id}`, JSON.stringify(topics));
      } catch {
        console.error("Unable to save topics to localStorage.");
      }
    }
  }, [topics, user?.id]);

  useEffect(() => {
    if (user?.id && hydratedUserId.current === user.id) {
      try {
        localStorage.setItem(`cards_${user.id}`, JSON.stringify(cards));
      } catch {
        console.error("Unable to save reflections to localStorage.");
      }
    }
  }, [cards, user?.id]);

  useEffect(() => {
    if (!user) {
      hydratedUserId.current = null;
      dispatch(hydrateTopics([]));
      dispatch(hydrateCards([]));
    }
  }, [user, dispatch]);

  return <>{children}</>;
};

export default UserDataProvider;
