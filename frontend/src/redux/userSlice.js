import { createSlice } from "@reduxjs/toolkit";
import AvatarProfile from "../assests/img/profileAvatar2.png";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Hung mH.",
        img: `${AvatarProfile}`,
        major: "Front-end Developer",
        story: "And goals is to become FullStack-Developer",
        gender: "male",
        hashtag: "#UocGiCo10Ty$ #hehe",
        address: "Hn",
        pending: false,
        error: false,

        listFeatures: [{ icon: <PeopleAltIcon />, label: "Friends" },],
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },

        updateError: (state) => {
            state.pending = false;
            state.error = true;
        },

        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;

            state.name = action.payload.name;
            state.img = action.payload.img;
            state.major = action.payload.major;
            state.story = action.payload.story;
            state.gender = action.payload.gender;
            state.hashtag = action.payload.hashtag;
            state.address = action.payload.address;
        },

        addFeatures: (state, action) => {
            const newFeature = action.payload;
            state.listFeatures.push(newFeature);
        },
    },
});

export const { updateStart, updateError, updateSuccess, addFeatures } =
    userSlice.actions;

export default userSlice.reducer;
