import { Box, makeStyles, Tooltip } from "@material-ui/core";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    layout: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },

    setting: {
        borderradius: "100rem",
        height: "fit-content",
        cursor: "pointer",

        "&:hover": {
            opacity: 0.6,
        },
    },

    information: {
        display: "flex",
        flexDirection: "column",
        gap: "7px 0",
    },

    avatar: {
        width: "110px",
        height: "120px",
        borderRadius: "20px",
    },

    text: {},

    username: {
        fontSize: "35px",
    },

    dev: {
        fontSize: "16px",
    },
    about: {
        fontSize: "14px",
    },
}));

function Header() {
    const classes = useStyles();

    // get data from store
    const user = useSelector((state) => state.user);

    let navigate = useNavigate();

    const onEditButtonClick = () => {
        navigate("/edit");
    };

    return (
        <Box className={classes.layout}>
            <Tooltip title="Edit">
                <Box
                    className={classes.setting}
                    onClick={onEditButtonClick}
                >
                    <ModeEditIcon />
                </Box>
            </Tooltip>
            <Box className={classes.information}>
                <Box className={classes.avatar}>
                    <img
                        src={user.img}
                        alt={user.name}
                        srcSet=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
                <Box className={classes.text}>
                    <Box className={classes.username}>{user.name}</Box>
                    <Box className={classes.dev}>{user.major}</Box>
                    <Box className={classes.about}>{user.story}</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default memo(Header);
