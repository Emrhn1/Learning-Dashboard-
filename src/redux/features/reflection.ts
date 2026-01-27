import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardsState = {
  learned: string;
  difficult: string;
  createdAt: string; // Tarih ekleyelim
};

const initialState: { cards: CardsState[] } = {
  cards: [],
};

export const CardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<{ learned: string; difficult: string }>) => {
      state.cards.push({
        learned: action.payload.learned,
        difficult: action.payload.difficult,
        createdAt: new Date().toISOString(),
      });
    },

    hydrateCards: (state, action: PayloadAction<CardsState[]>) => {
      state.cards = action.payload;
    },

    clearCards: (state) => {
      state.cards = [];
    },
  },
});

export default CardSlice.reducer;
export const { addCard, hydrateCards, clearCards } = CardSlice.actions;