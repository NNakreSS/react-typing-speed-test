import { configureStore } from "@reduxjs/toolkit";
import typing from "./slicers/typingSlice";

const Store = configureStore({
  reducer: {
    typing,
  },
});

export default Store;
