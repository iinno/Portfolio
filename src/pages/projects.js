import React from 'react';
import { Grid, Card, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material';
import Layout from '../components/layout';
import { wrapper, line, icon, iconList } from '../css/about.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import spotifyLogo from '../images/spotify.webp';
import gatsbyLogo from '../images/gatsby.png';

const ProjectPage = () => {
    const email = 'vince.inho@gmail.com';

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        alert("Email copied to clipboard!");
    };

    return (
        <Layout>
            <Grid container spacing={1} className={wrapper}>
                <Grid item xs={12} align="left">
                    <h1>Side Projects</h1>
                    <hr className={line}/>
                </Grid>
                <Grid item xs={8} align="left">
                    <p style={{ fontSize: "3.3vmin", color: "gray" }}>
                        Below are some projects I've been working on to quench my curiosity!
                    </p>
                    <Card>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={gatsbyLogo}
                                    alt="a"
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Personal Website
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Personal Website made from scratch with React, GatsbyJS, and hopefully more graphQL.
                                        Work is still in progress!
                                    </Typography>
                                </CardContent> 
                            </Grid>
                        </Grid>
                        <CardActions>
                            <Button href="https://github.com/iinno/portfolio" style={{ color: "#E28437" }}>Source Code</Button>
                        </CardActions>
                    </Card>
                    <Card style={{ marginTop: 20 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={spotifyLogo}
                                    alt="b"
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Music Controller
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A web application to control spotify!
                                        Made with React, Django, REST API and Spotify API.
                                        This was made following a tutorial.
                                    </Typography>
                                </CardContent> 
                            </Grid>
                        </Grid>
                        <CardActions>
                            <Button href="https://github.com/iinno/music_controller" style={{ color: "#E28437" }}>Source Code</Button>
                        </CardActions>
                    </Card>
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

export default ProjectPage;