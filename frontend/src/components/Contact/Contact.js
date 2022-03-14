import { Box, Button, makeStyles } from "@material-ui/core";
import Icon from "@mui/material/Icon";
import SvgIcon from "@mui/material/SvgIcon";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeatures } from "../../redux/commonSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        gap: "0 20px",
    },

    button: {},
}));

const Contact = (props) => {
    const { isOpenAdd } = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const featuresStatus = useSelector((state) => state.common);

    // const onClickAddNewFeatures = () => {
    //     dispatch(addFeatures());
    // };

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
                onClick={isOpenAdd}
            >
                <Icon fontSize="small">add_circle</Icon>
            </Button>
        </Box>
    );
};

export default Contact;
