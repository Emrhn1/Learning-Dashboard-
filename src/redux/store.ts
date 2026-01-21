import {configureStore} from "@reduxjs/toolkit";
import {addTopics} from "@/redux/features/topics/addTopics";
import { CardSlice } from "@/redux/features/reflection";

export const store = configureStore({
    reducer: {
        topic: addTopics.reducer,
        cards: CardSlice.reducer,
    }
})
store.subscribe(()=> {
    const state = store.getState();
    localStorage.setItem("topic", JSON.stringify(state.topic.data));
    console.log("State saved to localStorage:", state.topic.data);
})

export type RootState = ReturnType<typeof store.getState>   
export type AppDispatch = typeof store.dispatch