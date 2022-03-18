import { Box, makeStyles, Snackbar } from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeatures } from '../../redux/userSlice'

import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Lists from "../../components/Lists/Lists";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
    },
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

    pagination: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {},
}));

const Profile = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const pending = useSelector((state) => state.user.pending);
    const error = useSelector((state) => state.user.error);

    const [isOpenNewFeatures, setIsOpenNewFeatures] = useState(false);
    const [addFeaturesIcon, setAddFeaturesIcon] = useState(false);
    const [activeIconIndex, setActiveIconIndex] = useState();
    const [iconText, setIconText] = useState({ name: "Select Icon", icon: null });
    const [nameFeature, setNameFeature] = useState({ name: "" });
    const [positionToastMsg, setPositionToastMsg] = useState({ open: false });
    const [showPagging, setShowPagging] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const userListFeatures = useSelector(
        (state) => state.user.listFeatures
    );

    useEffect(() => {
        let isShowPagging = true;
        if (isShowPagging) {
            if (userListFeatures.length > 6) {
                setShowPagging(true);
            }
        }
        return () => {
            return isShowPagging = false;
        };
    }, [userListFeatures]);


    const onClickAddNewFeatures = () => {
        setIsOpenNewFeatures(!isOpenNewFeatures);
        setAddFeaturesIcon(!addFeaturesIcon);
    };

    const handleOnInputChange = (prop) => (event) => {
        event.preventDefault();
        setNameFeature({ ...nameFeature, name: event.target.value });
    };

    const handleClose = () => {
        setPositionToastMsg({ open: false });
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
            if (nameFeature.name === '') {
                setPositionToastMsg({ open: true });
            } else {
                const AddData = {
                    icon: iconText.icon,
                    label: nameFeature.name,
                }

                dispatch(addFeatures(AddData));

                setIsOpenNewFeatures(!isOpenNewFeatures);
                setAddFeaturesIcon(!addFeaturesIcon);

                setIconText({ name: "Select Icon", icon: null })
                setNameFeature({ name: "" })
            }
        } else {
            setIsOpenNewFeatures(!isOpenNewFeatures);
            setAddFeaturesIcon(!addFeaturesIcon);
        }
    };

    return (
        <>
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
                        currentPage={ currentPage }
                    />
                </Box>
                <Snackbar
                    anchorOrigin={ {
                        vertical: 'top',
                        horizontal: 'right'
                    } }
                    autoHideDuration={ 3000 }
                    open={ positionToastMsg.open }
                    onClose={ handleClose }
                    message="Don't leave field with empty"
                />

                { showPagging &&
                    <Box className={ classes.pagination }>
                        <Pagination page={ currentPage } count={ (Math.floor((userListFeatures.length) / 5) + 1) } shape="rounded"
                            onChange={ (event, value) => setCurrentPage(value) }
                        />
                    </Box>
                }
            </Box>
        </>
    );
};

export default Profile;
