import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";


export type CardsState = {
    learned: string;
    difficult: string;
}

const initialState: { cards: CardsState[] } = {
    cards: []
}

export const CardSlice = createSlice({
    name:"cards",
    initialState,
    reducers: {
        addCard: (state,action: PayloadAction<{learned: string, difficult: string}>) => {
            state.cards.push({
                learned: action.payload.learned,
                difficult: action.payload.difficult
            })
        }
    }
})
export default CardSlice.reducer;
export const {addCard} = CardSlice.actions;