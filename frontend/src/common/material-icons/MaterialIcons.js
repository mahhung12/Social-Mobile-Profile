import { ListItemIcon, Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Crop32Icon from "@mui/icons-material/Crop32";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import EmailIcon from "@mui/icons-material/Email";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterIcon from "@mui/icons-material/Filter";
import FolderIcon from "@mui/icons-material/Folder";
import FourKIcon from "@mui/icons-material/FourK";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupIcon from "@mui/icons-material/Group";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import LinkIcon from "@mui/icons-material/Link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SchoolIcon from "@mui/icons-material/School";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SixKPlusIcon from "@mui/icons-material/SixKPlus";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import StarsIcon from "@mui/icons-material/Stars";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import WorkIcon from "@mui/icons-material/Work";

const arrayIconLists = [
    { icon: <WorkIcon /> },
    { icon: <SwitchAccountIcon /> },
    { icon: <StarsIcon /> },
    { icon: <SlideshowIcon /> },
    { icon: <SixKPlusIcon /> },
    { icon: <ShareIcon /> },
    { icon: <ShoppingCartIcon /> },
    { icon: <SchoolIcon /> },
    { icon: <AccountBoxIcon /> },
    { icon: <AccessTimeFilledIcon /> },
    { icon: <Brightness1Icon /> },
    { icon: <CameraAltIcon /> },
    { icon: <CancelIcon /> },
    { icon: <ChatBubbleIcon /> },
    { icon: <CheckCircleIcon /> },
    { icon: <ClearIcon /> },
    { icon: <CloudCircleIcon /> },
    { icon: <Crop32Icon /> },
    { icon: <DensitySmallIcon /> },
    { icon: <DoorSlidingIcon /> },
    { icon: <DriveEtaIcon /> },
    { icon: <EmailIcon /> },
    { icon: <ErrorOutlineIcon /> },
    { icon: <FavoriteIcon /> },
    { icon: <FilterIcon /> },
    { icon: <FolderIcon /> },
    { icon: <FourKIcon /> },
    { icon: <GitHubIcon /> },
    { icon: <HeadphonesIcon /> },
    { icon: <HomeIcon /> },
    { icon: <InfoIcon /> },
    { icon: <KeyboardVoiceIcon /> },
    { icon: <LinkIcon /> },
    { icon: <ModeEditIcon /> },
    { icon: <BrightnessHighIcon /> },
    { icon: <GroupIcon /> },
];

const useStyles = makeStyles((theme) => ({
    Box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },

    icon: {
        border: "1px solid black",
        width: "fit-content",

        padding: theme.spacing(2),

        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",

        "&:nth-child(even)": {
            backgroundColor: "#7432460f",
        },

        "&:hover": {
            cursor: "pointer",
            opacity: "0.7",
        },
    },
}));

const ArrayIcon = () => {
    const classes = useStyles();
    const [iconText, setIconText] = useState("Select Icon");

    function onClickChangeIcon(list) {
        setIconText(
            // iconText === "Select Icon" ? "Select Icon" : list.icon
            list.icon
        );
    }

    console.log(iconText);

    return (
        <Box className={classes.Box}>
            {arrayIconLists.map((list, index) => {
                return (
                    <ListItemIcon
                        className={classes.icon}
                        key={index}
                        onClick={() =>
                            onClickChangeIcon({
                                icon: list,
                                index,
                            })
                        }
                    >
                        {list.icon}
                    </ListItemIcon>
                );
            })}
        </Box>
    );
};

export default ArrayIcon;
