import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const typingAdapter = createEntityAdapter();
export const typingSelector = typingAdapter.getSelectors(
  (state) => state.typing
);

const initialState = () =>
  typingAdapter.getInitialState({
    status: "idle",
    currentWord: {
      index: 0,
      id: null,
      word: "",
    },
    counts: {
      failed: 0,
      successed: 0,
      pressed: {
        failed: 0,
        successed: 0,
      },
    },
  });

const reducers = {
  wordAdded: typingAdapter.addOne,
  wordsAdded: typingAdapter.addMany,
  wordUpdated: typingAdapter.updateOne,
  wordRemoved: typingAdapter.removeOne,
  setStatus(state, { payload }) {
    state.status = payload;
  },
  setCurentWord(state, { payload }) {
    state.currentWord = payload;
  },
  incrementFailed(state) {
    state.counts.failed += 1;
  },
  incrementSuccessed(state) {
    state.counts.successed += 1;
  },
  incrementPressedFailed(state) {
    state.counts.pressed.failed += 1;
  },
  incrementPressedSuccessed(state) {
    state.counts.pressed.successed += 1;
  },
  resetAll() {
    return initialState();
  },
};

const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers,
});

export default typingSlice.reducer;
export const {
  wordAdded,
  wordsAdded,
  wordUpdated,
  wordRemoved,
  setStatus,
  setCurentWord,
  incrementFailed,
  incrementSuccessed,
  incrementPressedFailed,
  incrementPressedSuccessed,
  resetAll,
} = typingSlice.actions;
