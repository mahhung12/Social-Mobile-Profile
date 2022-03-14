import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import commonReducer from "./commonSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        common: commonReducer,
    },
});
