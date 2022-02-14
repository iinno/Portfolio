import * as React from 'react';
import Layout from '../components/layout';
import { Grid } from '@mui/material';
import { navItemHome, intro } from '../css/homePage.module.css';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Grid container spacing={1}>
        <Grid item xs={12}  align="center" className={navItemHome}>
          <p className={intro}>
            <span style={{ fontSize: "3vmin", color: "gray"}}>Hi, I'm </span>
            <span style={{ fontSize: "10vmin", display: 'inline-block'}}>Vincent Kim</span><br/>
            <span style={{ fontSize: "3.5vmin", color: "gray" }}>
              A <span style= {{ color: "#E28437" }}>Software Engineer </span> 
              & <span style= {{ color: "#E28437", display: 'inline-block' }}>Embedded Software Consultant</span><br/>
              at <span>Green Hills Software.</span>
            </span>
          </p>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;