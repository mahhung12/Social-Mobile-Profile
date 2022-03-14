import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
    name: "common",
    initialState: {
        addFeatures: false,
    },
    reducers: {
        addFeatures: (state) => {
            state.addFeatures = !state.addFeatures;
        },
    },
});

export const { addFeatures } = commonSlice.actions;

export default commonSlice.reducer;
