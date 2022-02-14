import * as React from 'react';
import { Link } from 'gatsby';
import { container, background, navItemHome, navBar, layoutChildren } from '../css/layout.module.css';
import { Grid } from '@mui/material';
import DropDown from './dropdown';

const Layout = ({ children }) => {

    return (
        <div className={container}>
            <div className={background}/>
            <Grid container spacing={1} className={navBar}>
                <Grid item xs={6} align="left">
                    <Link to="/" className={navItemHome}>
                        Home
                    </Link>
                </Grid>
                <Grid item xs={6} align="right">
                    <DropDown />
                </Grid>
            </Grid>
            <Grid container spacing={1} className={layoutChildren}>
                <Grid item xs={12} align="center">
                    {children}
                </Grid>
            </Grid>
        </div>
    )
};

export default Layout; 