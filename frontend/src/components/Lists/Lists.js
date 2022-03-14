import {
    Badge,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    TextField,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";

const style = {
    width: "100%",
    // maxWidth: 360,
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
}));

const lists = [
    { icon: <FolderIcon />, label: "Projects" },
    { icon: <WorkIcon />, label: "Experiences" },
    { icon: <ImageIcon />, label: "Images" },
    { icon: <PeopleAltIcon />, label: "Friends" },
];

export default function Lists(props) {
    const { isOpen } = props;

    const classes = useStyles();

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
                    <Box>
                        <Box className={classes.item}>
                            <TextField
                                required
                                id="filled-required"
                                label="Name"
                                defaultValue=""
                                variant="filled"
                                style={{ width: "100%" }}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
