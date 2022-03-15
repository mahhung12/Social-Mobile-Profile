import { Box, Button, makeStyles, Tooltip } from "@material-ui/core";
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
    const { isOpenAdd, defaultIcon } = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const featuresStatus = useSelector((state) => state.common);

    return (
        <Box className={ classes.root }>
            <Button
                variant="contained"
                color="primary"
                className={ classes.button }
            >
                Contact Me
            </Button>
            <Tooltip title="Home">
                <Button
                    variant="contained"
                    color="secondary"
                    className={ classes.button }
                >
                    <SvgIcon color="white">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                </Button>
            </Tooltip>

            <Tooltip title="Add Featues">
                <Button
                    variant="contained"
                    color="primary"
                    className={ classes.button }
                    onClick={ isOpenAdd }
                >
                    { !defaultIcon ? (
                        <Icon fontSize="small">add_circle</Icon>
                    ) : (
                        "Save"
                    ) }
                </Button>
            </Tooltip>
        </Box>
    );
};

export default Contact;
