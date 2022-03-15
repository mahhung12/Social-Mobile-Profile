import {
    Box,
    Button,
    ListItemIcon,
    makeStyles,
    Modal,
    TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from "react";
import { addFeatures } from '../../../redux/userSlice'
import { arrayIconLists } from "../../../common/material-icons/MaterialIcons";

const useStyles = makeStyles((theme) => ({
    Box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },

    rootAdd: {
        padding: theme.spacing(2),
    },

    itemAdd: {
        borderRadius: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "flex-start",
        gap: "8px 0",
    },

    addIconLayout: {
        borderRadius: "0px",
        width: "fit-content",
    },

    iconLayout: {
        padding: theme.spacing(2),

        "&:hover": {
            cursor: "pointer",
        },
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
            // backgroundColor: "#7432460f",
        },

        "&:hover": {
            cursor: "pointer",
            opacity: "0.7",
        },
    },

    active: {
        // border: "3px solid red",
        position: "relative",
        zIndex: "9999",
        backgroundColor: "#7b8bb4",
    },
}));

const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const AddListItem = (props) => {
    const { handleOnInputChange, onClickChangeIcon, iconText, activeIconIndex } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const OpenSelectIcon = () => {
        return (
            <Modal open={ open } onClose={ handleClose }>
                <Box sx={ styles } className={ classes.iconLayout }>
                    <OpenListItem />
                </Box>
            </Modal>
        );
    };

    const OpenListItem = () => {
        return (
            <Box className={ classes.Box }>
                { arrayIconLists.map((list, index) => {
                    return (
                        <ListItemIcon
                            className={ `${classes.icon} ${index === activeIconIndex
                                ? `${classes.active}`
                                : ""
                                }` }
                            key={ index }
                            onClick={ () =>
                                onClickChangeIcon({
                                    icon: list.icon,
                                    index,
                                })
                            }
                        >
                            { list.icon }
                        </ListItemIcon>
                    );
                }) }
            </Box>
        );
    };

    return (
        <Box className={ classes.rootAdd }>
            <Box className={ classes.itemAdd }>
                <Box>
                    <Button
                        className={ classes.addIconLayout }
                        onClick={ handleOpen }
                        variant="outlined"
                    >
                        {/* Select Icon */ }
                        { iconText.icon === null
                            ? iconText.name
                            : iconText.icon }
                    </Button>
                </Box>
                <TextField
                    required
                    id="filled-required"
                    label="Name"
                    defaultValue=""
                    variant="filled"
                    style={ {
                        width: "100%",
                        borderRadius: "14px",
                    } }
                    className={ classes.addIcon }
                    onChange={ handleOnInputChange() }
                />
            </Box>
            <OpenSelectIcon />
        </Box>
    );
};

export default AddListItem;
