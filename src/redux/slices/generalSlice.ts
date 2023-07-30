import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  setIsConversationsCleared: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action) => {
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    },

    setIsConversationsCleared: (state, action) => {
      return {
        ...state,
        isConversationsCleared: action.payload,
      };
    },
  },
});

export const { setIsSidebarOpen, setIsConversationsCleared } =
  generalSlice.actions;

export default generalSlice.reducer;
