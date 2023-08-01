import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  setIsConversationsCleared: false,
  width: window.innerWidth,
  isSidebarMinimized: false,
  isMessageOpen: false,
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

    setIsMessageOpen: (state, action) => {
      return {
        ...state,
        isMessageOpen: action.payload,
      };
    },
  },
});

export const {
  setIsSidebarOpen,
  setIsConversationsCleared,
  setWidth,
  setIsSidebarMinimized,
  setIsMessageOpen,
} = generalSlice.actions;

export default generalSlice.reducer;
