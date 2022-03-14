import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";

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
    const pending = useSelector((state) => state.user.pending);
    const error = useSelector((state) => state.user.error);

    const [isOpenNewFeatures, setIsOpenNewFeatures] = useState(false);

    const onClickAddNewFeatures = () => {
        setIsOpenNewFeatures(!isOpenNewFeatures);
    };

    return (
        <Box className={classes.root}>
            {pending && <p className="loading">Loading...</p>}
            <Box className={classes.header}>
                <Header />
            </Box>

            <Box className={classes.contact}>
                <Contact isOpenAdd={onClickAddNewFeatures} />
            </Box>

            {error && <p className="error">Error fetch data</p>}
            <Box className={classes.main}>
                <Lists isOpen={isOpenNewFeatures} />
            </Box>
        </Box>
    );
};

export default Profile;
