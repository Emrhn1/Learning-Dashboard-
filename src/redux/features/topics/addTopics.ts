import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { LevelType, Status } from "@/types/topicCard";

export interface Topic {
  id: string;
  title: string;
  category: string;
  level: LevelType;
  status: Status;
  message: string;
  progress: number;
  solution?: string;
  createdAt: string;
  solvedAt?: string;
}

interface TopicState {
  data: Topic[];
  currentLevel: string;
  currentStatus: string;
}

interface FilterPayload {
  level?: string;
  status?: string;
}

export const addTopics = createSlice({
  name: "topic",
  initialState: {
    data: [],
    currentLevel: "All Levels",
    currentStatus: "All Status",
  } as TopicState,
  reducers: {
    addTopic: (state, action: PayloadAction<Topic>) => {
      state.data.push(action.payload);
    },
    updateFilterTopic: (state, action: PayloadAction<FilterPayload>) => {
      if (action.payload.level !== undefined) {
        state.currentLevel = action.payload.level;
      }
      if (action.payload.status !== undefined) {
        state.currentStatus = action.payload.status;
      }
    },
    hydrateTopics(state, action: PayloadAction<Topic[]>) {
      state.data = action.payload;
    },
    removeTopic: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateTopicProgress: (
      state,
      action: PayloadAction<{ id: string; progress: number }>,
    ) => {
      const topic = state.data.find((item) => item.id === action.payload.id);
      if (topic) {
        topic.progress = action.payload.progress;
        topic.status = action.payload.progress >= 100 ? "Completed" : topic.status === "Completed" ? "Active" : topic.status;
      }
    },
    saveSolution: (state, action: PayloadAction<{ id: string; solution: string }>) => {
      const topic = state.data.find((item) => item.id === action.payload.id);
      if (topic) {
        topic.solution = action.payload.solution;
        topic.solvedAt = new Date().toISOString();
        topic.status = "Active";
      }
    },
  },
});

export const selectFilteredTopics = (state: RootState) => {
  const { data, currentLevel, currentStatus } = state.topic;

  return data.filter((topic) => {
    const levelMatch = currentLevel === "All Levels" || topic.level === currentLevel;
    const statusMatch = currentStatus === "All Status" || topic.status === currentStatus;
    return levelMatch && statusMatch;
  });
};

export const selectActiveTopicsCount = (state: RootState) =>
  state.topic.data.filter((topic) => topic.status === "Active").length;

export const selectStuckTopicsCount = (state: RootState) =>
  state.topic.data.filter((topic) => topic.status === "Stuck").length;

export const selectSolutionsCount = (state: RootState) => {
   return state.topic.data.filter((topic) => topic.solution).length;
}

export default addTopics.reducer;
export const {
  addTopic,
  updateFilterTopic,
  hydrateTopics,
  removeTopic,
  updateTopicProgress,
  saveSolution,
} = addTopics.actions;
