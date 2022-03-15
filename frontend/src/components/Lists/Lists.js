import {
    Badge,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import AddListItem from "./AddListItem/AddListItem";

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
}));

const lists = [
    { icon: <FolderIcon />, label: "Projects" },
    { icon: <WorkIcon />, label: "Experiences" },
    { icon: <ImageIcon />, label: "Images" },
];

export default function Lists(props) {
    const { isOpen } = props;
    const classes = useStyles();

    const [badgeData, setBadgeData] = useState(3);

    const userListFeatures = useSelector(
        (state) => state.user.listFeatures
    );
    let newList = userListFeatures.concat(lists)
    console.log(newList);

    return (
        <Box className={ classes.root }>
            <Box className={ classes.wrapper }>
                { !isOpen ? (
                    <List
                        className={ classes.lists }
                        sx={ style }
                        component="nav"
                        aria-label="mailbox folders"
                    >
                        { newList.map((list, index) => {
                            return (
                                <Box key={ index } className={ classes.item }>
                                    <ListItem button>
                                        <Badge
                                            badgeContent={ badgeData }
                                            color="primary"
                                            style={ {
                                                maxWidth: "25px",
                                                marginRight: "20px",
                                            } }
                                        >
                                            <ListItemIcon>
                                                { list.icon }
                                            </ListItemIcon>
                                        </Badge>
                                        <ListItemText
                                            primary={ list.label }
                                        />
                                        <ArrowForwardIosIcon
                                            fontSize="small"
                                            color="action"
                                        />
                                    </ListItem>
                                </Box>
                            );
                        }) }
                    </List>
                ) : (
                    <AddListItem />
                ) }
            </Box>
        </Box>
    );
}
