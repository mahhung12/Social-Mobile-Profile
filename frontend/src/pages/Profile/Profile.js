import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";

const useStyles = makeStyles((theme) => ({
    root: {},
    header: {},
    contact: {
        marginTop: "20px",
    },
    main: {},
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
            <Box className={classes.main}></Box>

            {/* <EditPage /> */}
        </Box>
    );
};

export default Profile;
