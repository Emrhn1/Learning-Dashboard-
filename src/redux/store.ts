import {configureStore} from "@reduxjs/toolkit";
import {addTopics} from "@/redux/features/topics/addTopics";

export const store = configureStore({
    reducer: {
        topic: addTopics.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch