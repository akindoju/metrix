import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  setIsConversationsCleared: false,
  width: window.innerWidth,
  isSidebarMinimized: false,
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

    setWidth: (state, action) => {
      return {
        ...state,
        width: action.payload,
      };
    },

    setIsSidebarMinimized: (state, action) => {
      return {
        ...state,
        isSidebarMinimized: action.payload,
      };
    },
  },
});

export const {
  setIsSidebarOpen,
  setIsConversationsCleared,
  setWidth,
  setIsSidebarMinimized,
} = generalSlice.actions;

export default generalSlice.reducer;
