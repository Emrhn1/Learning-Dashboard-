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
  const hasHydrated = useRef(false);

  // Kullanıcı yüklendiğinde localStorage'dan verileri al
  useEffect(() => {
    if (isLoaded && user?.id && !hasHydrated.current) {
      // Topics'i yükle
      const storedTopics = localStorage.getItem(`topic_${user.id}`);
      if (storedTopics) {
        dispatch(hydrateTopics(JSON.parse(storedTopics)));
      } else {
        dispatch(hydrateTopics([])); // Boş başla
      }

      // Cards/Reflections'ı yükle
      const storedCards = localStorage.getItem(`cards_${user.id}`);
      if (storedCards) {
        dispatch(hydrateCards(JSON.parse(storedCards)));
      } else {
        dispatch(hydrateCards([])); // Boş başla
      }

      hasHydrated.current = true;
    }
  }, [isLoaded, user?.id, dispatch]);

  // Topics değiştiğinde localStorage'a kaydet
  useEffect(() => {
    if (user?.id && hasHydrated.current) {
      localStorage.setItem(`topic_${user.id}`, JSON.stringify(topics));
    }
  }, [topics, user?.id]);

  // Cards değiştiğinde localStorage'a kaydet
  useEffect(() => {
    if (user?.id && hasHydrated.current) {
      localStorage.setItem(`cards_${user.id}`, JSON.stringify(cards));
    }
  }, [cards, user?.id]);

  // Kullanıcı değiştiğinde (logout/login) hydration'ı resetle
  useEffect(() => {
    if (!user) {
      hasHydrated.current = false;
    }
  }, [user]);

  return <>{children}</>;
};

export default UserDataProvider;