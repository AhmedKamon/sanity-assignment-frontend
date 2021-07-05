import Logo from '../public/brightlocal_logo.svg'
import Image from 'next/image'
import { Grid, Button, Typography, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import styles from '../styles/bright.module.css'

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#a5c559',
        color: 'white',
        fontSize: '20px',
        padding: '10px 40px',
        borderRadius: '50px',
        margin: '10px 0px',
        cursor: 'pointer'
    },
    bannerInside:{
        margin:'50px'
    }
})
const Bright = () => {
    const classes = useStyles()
    return (

        <div>
            <Container className={styles.banner}>
            <div >
                <Grid container 
                    direction="row"
                    justify="space-between"
                    alignItems="center" 
                    
                    >
                    <Grid item xs={12} md={6} style={{marginTop:'50px'}}  >
                        
                        <h1 >Try BrightLocal free for 14 days</h1>
                        <h4>All features · Unlimited access · No card required</h4>
                        
                    </Grid>

                    <Grid item xs={12} md={6} align='center' style={{marginTop:'50px'}} >
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start Your Trail
                        </Button>
                    </Grid>

                </Grid>
                </div>
            </Container>
        </div>
    );
}

export default Bright;