import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { LevelType, Status } from "@/types/topicCard";

interface Topic {
  id: string;
  title: string;
  category: string;
  level: LevelType;
  status: Status;
  message?: string;
  progress: number;
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

export default addTopics.reducer;
export const { addTopic, updateFilterTopic } = addTopics.actions;
