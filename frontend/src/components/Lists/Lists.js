import {
    Badge,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
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
    const { isOpen, isAddFeature, onClickAddNewFeatures,
        handleOnInputChange, onClickChangeIcon, iconText,
        nameFeature, activeIconIndex, currentPage } = props;
    const classes = useStyles();
    let navigate = useNavigate();

    const [badgeData, setBadgeData] = useState(3);
    const [totalItemPerPage, setTotalItemPerPage] = useState([]);

    const userListFeatures = useSelector(
        (state) => state.user.listFeatures
    );

    const handleOnClickListItem = (name) => {
        const toLowerCase = name.toLowerCase();
        navigate(`/${toLowerCase}`)
    }

    useEffect(() => {
        setTotalItemPerPage(userListFeatures.slice(((currentPage - 1) * 5), ((currentPage - 1) * 5 + 1) + 4));
    }, [userListFeatures, currentPage]);

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
                        { totalItemPerPage.map((list, index) => {
                            return (
                                <Box
                                    key={ index }
                                    className={ classes.item }
                                    onClick={ () => handleOnClickListItem(list.label) }
                                >
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
