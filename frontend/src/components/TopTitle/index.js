import { makeStyles, Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        display: "flex",
        alignSelf: "center",
        cursor: "pointer",
        userSelect: "none",

        "&:hover": {
            opacity: 0.6,
        },
    },
    title: {
        fontSize: "22px",
        userSelect: 'none'
    }
}))

const Toptitle = ({ title }) => {
    let navigate = useNavigate();
    const classes = useStyles();

    const onBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <Box className={ classes.root }>
            <Box
                className={ classes.button }
                onClick={ onBackButtonClick }
            >
                <KeyboardBackspaceIcon />
            </Box>
            <Box className={ classes.title }>
                { title }
            </Box>
        </Box>
    );
}

export default Toptitle;
