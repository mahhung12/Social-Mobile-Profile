import * as React from "react";
import {
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Box,
    Badge,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WorkIcon from "@mui/icons-material/Work";
import ImageIcon from "@mui/icons-material/Image";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },

    item: {
        height: "75px",

        display: "flex",
    },
}));

const lists = [
    { icon: <FolderIcon />, label: "Projects" },
    { icon: <WorkIcon />, label: "Experiences" },
    { icon: <ImageIcon />, label: "Images" },
    { icon: <PeopleAltIcon />, label: "Friends" },
];

export default function Lists() {
    const classes = useStyles();
    return (
        <List
            className={classes.root}
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
                                    border: "1px solid red",
                                    width: "fit-content",
                                }}
                            >
                                <ListItemIcon
                                    style={{
                                        border: "1px solid red",
                                        width: "100%",
                                    }}
                                >
                                    {list.icon}
                                </ListItemIcon>
                            </Badge>
                            <ListItemText primary={list.label} />
                            <ArrowRightIcon
                                fontSize="large"
                                color="action"
                            />
                        </ListItem>
                    </Box>
                );
            })}
        </List>
    );
}
