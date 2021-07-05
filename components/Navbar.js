import React from 'react';
import Logo from '../public/brightlocal_logo.svg'
import Image from 'next/image'
import { Grid, Button, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { Container } from '@material-ui/core';


const UseStyles = makeStyles({
    links: {
        display: 'flex',
    },
    link: {
        padding: '10px',
    },
    btn: {
        backgroundColor: '#a5c559',
        color: 'white',
        fontSize: '20px',
        padding: '10px 40px',
        borderRadius: '50px',
        margin: '10px 0px',
        cursor: 'pointer'
    },
    mainBG: {
        marginLeft: '1%',
        marginRight: '1%',
    },
})

const navbar = () => {

    const classes = UseStyles()
    return (
        
<Container>

            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center" >
                <Grid item xs={12} md={2} >
                    <Image src={Logo} height={150} width={150} alt="Picture of the author" />
                </Grid>
                <Grid item xs={12} md={9} direction="row" >
                    <div className={classes.links}>
                        <Typography variant="h6"  className={classes.link} ><Link href='/'>Features</Link></Typography>
                        <Typography variant="h6" className={classes.link}><Link href='/'>Build Citation</Link></Typography>
                        <Typography variant="h6" className={classes.link}><Link href='/'>Solutions</Link></Typography>
                        <Typography variant="h6" className={classes.link}><Link href='/'>Pricing</Link></Typography>
                        <Typography variant="h6" className={classes.link}><Link href='/'>Book A Demo</Link></Typography>
                        <Typography variant="h6" className={classes.link}><Link href='/contactUs'>Contact Us</Link></Typography>
                        <Typography variant="h6" className={classes.link}><Link href='/'>Bright Ideas</Link></Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={1} >
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.btn}
                    >Submit
                    </Button>
                </Grid>

            </Grid>

            </Container>
    );
}

export default navbar;