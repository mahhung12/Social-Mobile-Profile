import {
    Badge,
    Box,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Modal,
    TextField,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import React, { useState } from "react";
import ArrayIcon from "../../common/material-icons/MaterialIcons";

const style = {
    width: "100%",
    bgcolor: "background.paper",
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    wrapper: {},

    lists: {
        padding: 0,
    },

    item: {
        height: "75px",
        padding: 0,
        display: "flex",
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

    addIcon: {
        borderRadius: "8px",
        width: "fit-content",
    },

    iconLayout: {
        padding: theme.spacing(2),

        "&:hover": {
            cursor: "pointer",
        },
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

const lists = [
    { icon: <FolderIcon />, label: "Projects" },
    { icon: <WorkIcon />, label: "Experiences" },
    { icon: <ImageIcon />, label: "Images" },
    { icon: <PeopleAltIcon />, label: "Friends" },
];

export default function Lists(props) {
    const { isOpen } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();

    const [iconText, setIconText] = useState();

    const OpenSelectIcon = () => {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles} className={classes.iconLayout}>
                    <ArrayIcon />
                </Box>
            </Modal>
        );
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.wrapper}>
                {!isOpen ? (
                    <List
                        className={classes.lists}
                        sx={style}
                        component="nav"
                        aria-label="mailbox folders"
                    >
                        {lists.map((list, index) => {
                            return (
                                <Box key={index} className={classes.item}>
                                    <ListItem button>
                                        <Badge
                                            badgeContent={4}
                                            color="primary"
                                            style={{
                                                maxWidth: "25px",
                                                marginRight: "20px",
                                            }}
                                        >
                                            <ListItemIcon>
                                                {list.icon}
                                            </ListItemIcon>
                                        </Badge>
                                        <ListItemText
                                            primary={list.label}
                                        />
                                        <ArrowForwardIosIcon
                                            fontSize="small"
                                            color="action"
                                        />
                                    </ListItem>
                                </Box>
                            );
                        })}
                    </List>
                ) : (
                    <Box className={classes.rootAdd}>
                        <Box className={classes.itemAdd}>
                            <Box>
                                <Button
                                    className={classes.addIcon}
                                    onClick={handleOpen}
                                    variant="outlined"
                                >
                                    Select Icon
                                    {/* {iconTextData.iconText} */}
                                </Button>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon />
                                </ListItemIcon>
                            </Box>
                            <TextField
                                required
                                id="filled-required"
                                label="Name"
                                defaultValue=""
                                variant="filled"
                                style={{
                                    width: "100%",
                                    borderRadius: "14px",
                                }}
                                className={classes.addIcon}
                            />
                        </Box>
                        <OpenSelectIcon />
                    </Box>
                )}
            </Box>
        </Box>
    );
}
