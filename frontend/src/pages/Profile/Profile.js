import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeatures } from '../../redux/userSlice'

import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Lists from "../../components/Lists/Lists";

const useStyles = makeStyles((theme) => ({
    root: {},
    header: {},
    contact: {
        marginTop: "20px",
    },
    main: {
        padding: 0,
        margin: 0,
        borderRadius: "17px",
        backgroundColor: "#d2e4b085",
        marginTop: "20px",
        overflow: "hidden",
    },
    footer: {},
}));

const Profile = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const pending = useSelector((state) => state.user.pending);
    const error = useSelector((state) => state.user.error);

    const [isOpenNewFeatures, setIsOpenNewFeatures] = useState(false);
    const [addFeaturesIcon, setAddFeaturesIcon] = useState(false);
    const [activeIconIndex, setActiveIconIndex] = useState();
    const [iconText, setIconText] = useState({ name: "Select Icon", icon: null });
    const [nameFeature, setNameFeature] = useState({ name: "" });

    const onClickAddNewFeatures = () => {
        setIsOpenNewFeatures(!isOpenNewFeatures);
        setAddFeaturesIcon(!addFeaturesIcon);
    };

    const handleOnInputChange = (prop) => (event) => {
        event.preventDefault();
        setNameFeature({ ...nameFeature, name: event.target.value });
    };

    const onClickChangeIcon = (list) => {
        setIconText((prev) => ({
            ...prev,
            icon: list.icon,
        }));
        setActiveIconIndex(list.index);
    };


    const onSubmitAddFeature = () => {
        if (addFeaturesIcon) {
            const AddData = {
                icon: iconText.icon,
                label: nameFeature.name,
            }

            dispatch(addFeatures(AddData));
        }
        setIsOpenNewFeatures(!isOpenNewFeatures);
        setAddFeaturesIcon(!addFeaturesIcon);
    };

    return (
        <Box className={ classes.root }>
            { pending && <p className="loading">Loading...</p> }
            <Box className={ classes.header }>
                <Header />
            </Box>

            <Box className={ classes.contact }>
                <Contact
                    isOpenAdd={ onSubmitAddFeature }
                    defaultIcon={ addFeaturesIcon }
                />
            </Box>

            { error && <p className="error">Error fetch data</p> }
            <Box className={ classes.main }>
                <Lists
                    isOpen={ isOpenNewFeatures }
                    isAddFeature={ addFeaturesIcon }
                    onClickAddNewFeatures={ onClickAddNewFeatures }
                    handleOnInputChange={ handleOnInputChange }
                    onClickChangeIcon={ onClickChangeIcon }
                    iconText={ iconText }
                    nameFeature={ nameFeature }
                    activeIconIndex={ activeIconIndex }
                />
            </Box>
        </Box>
    );
};

export default Profile;
