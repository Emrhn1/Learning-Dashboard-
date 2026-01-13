import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store";
interface Topic {
    id: string;
    title: string;
    category: string;
    level: string;
    status: string;
    message?:string;
}

interface TopicState {
    data: Topic[];
}

export const addTopics = createSlice({
    name: "topic",
    initialState: {
        data: [],
    } as TopicState,
    reducers: {
        addTopic: (state, action: PayloadAction<Topic>) => {
            state.data.push(action.payload)
        }
    }
})

export const selectActiveTopicsCount = (state: RootState) => 
    state.topic.data.filter(topic => topic.status === "Active").length;

export const selectStuckTopicsCount = (state: RootState) => 
    state.topic.data.filter(topic => topic.status === "Stuck").length;


export default addTopics.reducer;
export const {addTopic} = addTopics.actions;