import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import EditPage from "./components/Edit/EditPage";
import Profile from "./pages/Profile/Profile";

const useStyles = makeStyles((theme) => ({
    fatherRoot: {
        margin: "0",
    },

    root: {
        maxWidth: "425px",
        padding: theme.spacing(2, 3),
        borderRadius: "7px",
        border: "1px solid red",
        minHeight: "100vh",

        margin: "0 auto",
    },

    header: {},
    contact: {
        marginTop: "20px",
    },
    main: {},
    footer: {},
}));

function App() {
    const classes = useStyles();
    let params = useParams();
    let navigate = useNavigate();

    if (params === "/") {
        navigate("/profile");
    }
    return (
        <Box className={ classes.fatherRoot }>
            <Box className={ classes.root }>
                <Routes>
                    <Route path="/" element={ <Profile /> } />

                    <Route path="/profile" element={ <Profile /> } />

                    <Route path="edit" element={ <EditPage /> } />
                    {/* </Route> */ }
                    {/* <EditPage /> */ }
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
