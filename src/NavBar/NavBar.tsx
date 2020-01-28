import React from 'react';
import {AppBar, Box, Tab, Theme, Typography} from "@material-ui/core";
import {Router} from "@material-ui/icons";
import Tabs from '@material-ui/core/Tabs';
import {makeStyles} from "@material-ui/core/styles";
import {Link, Route} from "react-router-dom";
import LoginComp from "../LoginComp/LoginComp";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavBar() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Login" component={Link} to="/login"/>
                        <Tab label="Book"  component={Link} to="/station" {...a11yProps(1)} />
                        <Tab label="User Panel" component={Link} to="/user"{...a11yProps(2)} />
                    </Tabs>
                </AppBar>
            </div>
    );
}


