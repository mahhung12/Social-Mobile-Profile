import { Box, Button, makeStyles } from "@material-ui/core";
import Icon from "@mui/material/Icon";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        gap: "0 20px",
    },

    button: {},
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Contact Me
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
            >
                <SvgIcon color="white">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                <Icon fontSize="small">add_circle</Icon>
            </Button>
        </Box>
    );
};

export default Contact;
