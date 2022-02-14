import { Grid } from '@mui/material';
import React from 'react';
import Layout from '../components/layout';
import { wrapper, line, icon, iconList } from '../css/about.module.css'
import { StaticImage } from 'gatsby-plugin-image';
import resume from  '../images/VincentKim_resume.pdf';

const AboutPage = () => {
    const email = 'vince.inho@gmail.com';

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        alert("Email copied to clipboard!");
    };

    return (
        <Layout>
            <Grid container spacing={1} className={wrapper}>
                <Grid item xs={12} align="left">
                    <h1>A little about me...</h1>
                    <hr className={line}/>
                </Grid>
                <Grid item xs={8} align="left">
                    <p style={{ fontSize: "3.3vmin", color: "gray" }}>Hello! My name is&nbsp;
                    <span style={{ color: "black", fontWeight: "bold" }}>Vince</span>. I debug and triage issues in embedded systems employing a real-time operating system.
                    More recently, I've started doing some minor web developement work involving techonologies such as React and Django.
                    <br/>
                    <br/>
                    Besides software, I also love to play the piano, shoot some basketball and surf at local spots in Santa Barbara!
                    <br/>
                    <br/>
                    For more details regarding my experience and projects, please feel free to refer to my&nbsp;
                    <a href={resume}>resume</a>,&nbsp;
                    <a href='https://github.com/iinno'>
                        Github
                    </a> and/or&nbsp; 
                    <a href='https://www.linkedin.com/in/vincent-inho-kim/'>
                        Linkedin
                    </a>
                    .
                    <br/>
                    <br/>
                    Thanks for checking out my website!
                    </p>
                </Grid>
                <Grid item xs={4} align="center">
                    <ul className={iconList}>
                        <li><a href='https://www.linkedin.com/in/vincent-inho-kim/'>
                            <StaticImage src='../images/linkedin-3-256.png' alt='linkedin-logo' width={50} height={50} className={icon}/>
                        </a></li>
                        <li><a href='https://github.com/iinno'>
                            <StaticImage src='../images/github-8-256.png' alt='github-logo' width={50} height={50} className={icon}/>
                        </a></li>
                        <li><StaticImage src='../images/link.png' alt='gmail-logo' width={50} height={50} className={icon} onClick={copyEmail}/></li>
                    </ul>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default AboutPage;