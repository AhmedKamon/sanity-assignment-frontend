import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/dist/client/image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Facebook, } from '@material-ui/icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import head from '../public/brightlocal_logo.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '4%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    border: {
        borderBottom: '1px solid gray'
    },
    color: {
        color: '#2B60DE'
    },
    logo: {
        margin: '5% 0%  ',
        borderBottom: '1px solid gray',
        borderTop: '1px solid gray'
    }

}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3} direction="row">
                    <Grid item xs={12} md={6} container
                        direction="row"
                        justify="space-between"
                        alignItems="center"  >
                        <Grid item xs={12} md={6}>
                            <h2 className={classes.border}>Products</h2>
                            <h3 >Platform</h3>
                            <ul className={classes.color}>
                                <li><h4>Local Search Grid</h4></li>
                                <li><h4>Local Search Rank Checker</h4></li>
                                <li><h4>Citation Tracker</h4></li>
                                <li><h4>Local Search Audit</h4></li>
                                <li><h4>Google My Business Audit</h4></li>

                            </ul>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h2 className={classes.border}>Solutions</h2>
                            <h3 >Agency</h3>
                            <ul className={classes.color}>
                                <li><h4>White-Label Tools and Reporting</h4></li>
                                <li><h4>Multi-location Business</h4></li>
                                <li><h4>Small Business</h4></li>
                                <li><h4>BrightLocal for Enterprise</h4></li>
                                <li><h4>Local SEO APIs</h4></li>

                            </ul>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <h2 className={classes.border}>Company</h2>
                        <ul className={classes.color}>
                            <li><h4>About Us</h4></li>
                            <li><h4>Our Commitments</h4></li>
                            <li><h4>Contact Us</h4></li>
                            <li><h4>Case Studies</h4></li>
                            <li><h4>Customers</h4></li>

                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <h2 className={classes.border}>Community</h2>
                        <ul className={classes.color}>
                            <li><h4>Book a Demo</h4></li>
                            <li><h4>Research</h4></li>
                            <li><h4>Webinars</h4></li>
                            <li><h4>Free Resources</h4></li>
                            <li><h4>The BrightLocal Podcast</h4></li>

                        </ul>
                    </Grid>

                </Grid>

            </Container>
            <div align='center' className={classes.logo} style={{ padding: '20px 20px' }} >
                <Facebook color='primary' style={{ fontSize: 40 }} />
                <TwitterIcon color='primary' style={{ fontSize: 40 }} />
                <LinkedInIcon color='primary' style={{ fontSize: 40 }} />
                <InstagramIcon color='primary' style={{ fontSize: 40 }} />
                <YouTubeIcon color='primary' style={{ fontSize: 40 }} />
            </div>
            <div align='center'>
                <Image src={head} alt='img' />
            </div>

        </div>
    );
}

export default Footer;