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

export default function Lists(props) {
    const { isOpen, isAddFeature, onClickAddNewFeatures, handleOnInputChange, onClickChangeIcon, iconText, nameFeature, activeIconIndex } = props;
    const classes = useStyles();

    const [badgeData, setBadgeData] = useState(3);

    const userListFeatures = useSelector(
        (state) => state.user.listFeatures
    );

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
                        { userListFeatures.map((list, index) => {
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
                    <AddListItem
                        isAddFeature={ isAddFeature }
                        onClickAddNewFeatures={ onClickAddNewFeatures }
                        handleOnInputChange={ handleOnInputChange }
                        onClickChangeIcon={ onClickChangeIcon }
                        iconText={ iconText }
                        nameFeature={ nameFeature }
                        activeIconIndex={ activeIconIndex }
                    />
                ) }
            </Box>
        </Box>
    );
}
