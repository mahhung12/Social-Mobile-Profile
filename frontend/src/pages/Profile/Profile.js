import { Box, makeStyles } from "@material-ui/core";
import React from "react";
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

    return (
        <Box className={classes.root}>
            {pending && <p className="loading">Loading...</p>}
            <Box className={classes.header}>
                <Header />
            </Box>

            <Box className={classes.contact}>
                <Contact />
            </Box>

            {error && <p className="error">Error fetch data</p>}
            <Box className={classes.main}>
                <Lists />
            </Box>
        </Box>
    );
};

export default Profile;
