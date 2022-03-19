import {
    Avatar,
    Box,
    Button,
    FormControlLabel,
    FormLabel,
    IconButton,
    makeStyles,
    Radio,
    RadioGroup,
    styled,
    TextField,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { updateUser } from "../../redux/apiRequest";
import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../redux/userSlice";

const useStyles = makeStyles((theme) => ({
    root: {},
    top: {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
    },
    title: {
        fontSize: "20px",
        userSelect: "none",
    },
    button: {
        display: "flex",
        alignSelf: "center",
        cursor: "pointer",
        userSelect: "none",

        "&:hover": {
            opacity: 0.6,
        },
    },
    navigation: {
        marginTop: "20px",
    },
    tabs: {
        width: "50%",
    },
    avatar: {
        marginTop: "30px",
        margin: "0 auto",
        width: "fit-content",

        display: "flex",
        justifyContent: "center",
        alignItem: "center",

        border: "1px solid gray",
        borderRadius: "100%",
    },
    avatarRelative: {
        position: "relative",
        width: "120px",
        height: "120px",
    },
    camera: {
        position: "absolute",
        right: "-20%",
        bottom: "25%",
        // bottom: "0%",
    },
    main: {
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "repeat(5, 1fr)",
        gridTemplateAreas: `"name name" "major major" "story story" "gender id" "address address"`,
    },
    name: {
        gridArea: "name",
    },
    major: {
        gridArea: "major",
    },
    story: {
        gridArea: "story",
    },
    gender: {
        gridArea: "gender",
    },
    id: {
        gridArea: "id",
    },
    address: {
        marginTop: "15px",
        gridArea: "address",
    },
}));

const EditPage = () => {
    const classes = useStyles();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    // get data from store
    const user = useSelector((state) => state.user);
    // get common status

    const [nameTitleTop, setNameTitleTop] = useState('Profile');
    const [tabsActive, setTabsActive] = useState(true);
    const [editProfile, setEditProfile] = useState({
        name: user.name || "",
        img: user.img || "",
        major: user.major || "",
        story: user.story || "",
        gender: user.gender || "",
        hashtag: user.hashtag || "",
        address: user.address || "",
    });

    const handleEditProfileChange = (prop) => (event) => {
        event.preventDefault();
        setEditProfile({ ...editProfile, [prop]: event.target.value });

        if (prop === "img") {
            let url = URL.createObjectURL(event.target.files[0]);
            setEditProfile({ ...editProfile, img: url });
        }

        console.log(editProfile);
    };

    function onClickTabs(bool, name) {
        setNameTitleTop(name)
        return bool ? setTabsActive(true) : setTabsActive(false);
    }

    const onClickSaveClick = () => {
        const updatedUser = {
            name: editProfile.name,
            img: editProfile.img,
            major: editProfile.major,
            story: editProfile.story,
            gender: editProfile.gender,
            hashtag: editProfile.hashtag,
            address: editProfile.address,
        };

        updateUser(updatedUser, dispatch);
        navigate("/profile");
    };

    const onBackButtonClick = () => {
        navigate("/profile");
    };

    const Input = styled("input")({
        display: "none",
    });

    const ClassesTop = memo(() => {
        return (
            <>
                <Box
                    className={ classes.button }
                    onClick={ onBackButtonClick }
                >
                    <KeyboardBackspaceIcon />
                </Box>
                <Box className={ classes.title }>
                    { nameTitleTop }
                </Box>
                <Box className={ classes.button } onClick={ onClickSaveClick }>
                    Save
                </Box>
            </>
        );
    });

    const ClassesNavigation = memo(() => {
        return (
            <>
                <Button
                    variant="contained"
                    color={ tabsActive ? "primary" : "default" }
                    onClick={ () => onClickTabs(true, "Profile") }
                    className={ classes.tabs }
                >
                    Profile
                </Button>
                <Button
                    variant="contained"
                    color={ tabsActive ? "default" : "primary" }
                    onClick={ () => onClickTabs(false, "Overview") }
                    className={ classes.tabs }
                >
                    Overview
                </Button>
            </>
        );
    });

    return (
        <Box
            component="form"
            sx={ {
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            } }
            noValidate
            autoComplete="off"
            className={ classes.root }
        >
            {/* Class Top */ }
            <Box className={ classes.top }>
                <ClassesTop />
            </Box>

            {/* Navigation */ }
            <Box className={ classes.navigation }>
                <ClassesNavigation />
            </Box>

            <Box className={ classes.avatar }>
                <Box className={ classes.avatarRelative }>
                    <Avatar
                        alt="Avatar"
                        // variant="square"
                        src={ editProfile.img }
                        style={ {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        } }
                    />
                    <label
                        htmlFor="icon-button-file"
                        className={ classes.camera }
                        onChange={ handleEditProfileChange("img") }
                    // value={editProfile.img}
                    >
                        <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                        />
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </Box>
            </Box>

            <Box className={ classes.main }>
                <Box className={ classes.name }>
                    <FormLabel>Name</FormLabel>
                    <TextField
                        // label="Name"
                        value={ editProfile.name }
                        variant="outlined"
                        id="name"
                        style={ { width: "100%" } }
                        onChange={ handleEditProfileChange("name") }
                    />
                </Box>
                <Box className={ classes.major }>
                    <FormLabel>Major</FormLabel>
                    <TextField
                        // label="Major"
                        value={ editProfile.major }
                        variant="outlined"
                        id="major"
                        style={ { width: "100%" } }
                        onChange={ handleEditProfileChange("major") }
                    />
                </Box>
                <Box className={ classes.story }>
                    <FormLabel>Story</FormLabel>

                    <TextField
                        // label="Story"
                        value={ editProfile.story }
                        variant="outlined"
                        id="story"
                        style={ { width: "100%" } }
                        onChange={ handleEditProfileChange("story") }
                    />
                </Box>
                <Box className={ classes.gender }>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={ handleEditProfileChange("gender") }
                        defaultValue={ editProfile.gender }
                    >
                        <FormControlLabel
                            value="male"
                            control={ <Radio /> }
                            label="Male"
                        />
                        <FormControlLabel
                            value="female"
                            control={ <Radio /> }
                            label="Female"
                        />
                    </RadioGroup>
                </Box>
                <Box className={ classes.id }>
                    <FormLabel>Hashtag</FormLabel>
                    <TextField
                        disabled
                        value={ editProfile.hashtag }
                        variant="outlined"
                        id="hashtag"
                        style={ { width: "100%" } }
                        onChange={ handleEditProfileChange("hashtag") }
                    />
                </Box>
                <Box className={ classes.address }>
                    <FormLabel>Address</FormLabel>
                    <TextField
                        // label="Address"
                        value={ editProfile.address }
                        variant="outlined"
                        id="address"
                        style={ { width: "100%" } }
                        onChange={ handleEditProfileChange("address") }
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default memo(EditPage);
