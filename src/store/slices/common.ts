import { commonSliceInterface } from "./../../utils/interfaces/common";
import { createSlice } from "@reduxjs/toolkit";

const initialState: commonSliceInterface = {
  showModal: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    handleShowModel: (state) => {
      state.showModal = true;
    },
    handleHideModel: (state) => {
      state.showModal = false;
    },
  },
});

export const { handleHideModel, handleShowModel } = commonSlice.actions;

const commonSliceReducer = commonSlice.reducer;

export default commonSliceReducer;
