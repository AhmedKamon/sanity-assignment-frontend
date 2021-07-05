import { Grid, Button, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Image from 'next/image'
// import audit from '../public/aduit.png'
// import connect from '../public/connect.png'
// import gmb from '../public/gmb.png'
// import label from '../public/label.jpg.png'
// import location from '../public/location.png'
// import monitor from '../public/monitor.png'
// import tool from '../public/tool.png'
// import view from '../public/view.png'
// import nie from '../public/nielson-hall-iprospect.png'
import star from '../public/star.png'
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../sanity";

const useStyles = makeStyles({
    mainBG: {
        backgroundColor: "#f1f6f5",
        height: "900px",
        padding: '20px '
    },
    text: {
        paddingTop: "50px",
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
    user: {
        backgroundColor: 'white',
        width:'800px',
        height: '600px',
        padding: '20px',
        boxShadow: "5px 5px 10px"
    },
    userText: {
        color: '#a5c559'
    }

})
const Visibility = ({firstSection}) => {
    const {name, referenceList, userImage, userName, userTitle} = firstSection[0]
    // console.log(name, referenceList, userImage, userName, userTitle)
    const imageProps = useNextSanityImage(
        sanityClient,
        userImage,
    );
    const image1 = useNextSanityImage(
        sanityClient,
        referenceList[0],
    );
    const image2 = useNextSanityImage(
        sanityClient,
        referenceList[1],
    );
    const image3 = useNextSanityImage(
        sanityClient,
        referenceList[2],
    );
    const image4 = useNextSanityImage(
        sanityClient,
        referenceList[3],
    );
    const image5 = useNextSanityImage(
        sanityClient,
        referenceList[4],
    );
    const image6 = useNextSanityImage(
        sanityClient,
        referenceList[5],
    );
    const image7 = useNextSanityImage(
        sanityClient,
        referenceList[6],
    );
    const image8 = useNextSanityImage(
        sanityClient,
        referenceList[7],
    );

    const classes = useStyles()
    return (

        <div className={classes.mainBG}>


            <div className={classes.text}>
                <Typography variant='h6' align='center' ><h1>{name}</h1></Typography>
            </div>
            <div className={classes.text}>
                
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center" >
                        <Grid item xs={12} md={9} container
                            direction="row"
                            justify="space-between"
                            alignItems="center" >
                            <Grid item xs={12} md={3} align="center">
                                <Image {...image1} height={150} width={200} alt="Picture of the author" />
                                <h3>Audit citations</h3>
                            </Grid>
                            <Grid item xs={12} md={3} align='center' >
                                <Image {...image2} height={150} width={200} alt="Picture of the author" />
                                <h3>Track local rankings</h3>
                            </Grid>
                            <Grid item xs={12} md={3} align='center' >
                                <Image {...image3} height={150} width={200} alt="Picture of the author" />
                                <h3>Monitor and grow</h3>
                            </Grid>
                            <Grid item xs={12} md={3} align='center' >
                                <Image {...image4} height={150} width={200} alt="Picture of the author" />
                                <h3>View and reply to reviews</h3>
                            </Grid>
                            <Grid item xs={12} md={3} align='center' >
                                <Image {...image5} height={150} width={200} alt="Picture of the author" />
                                <h3>White-label reporting</h3>
                            </Grid>
                            <Grid item xs={12} md={3} align='center' >
                                <Image {...image6} height={150} width={200} alt="Picture of the author" />
                                <h3>Multi-Location reporting</h3>
                            </Grid>
                            <Grid item xs={12} md={3} align='center' >
                                <Image {...image7} height={150} width={200} alt="Picture of the author" />
                                <h3>Connect Google Analytics</h3>
                            </Grid>
                            <Grid item xs={12} md={3} align='center' >
                                <Image {...image8} height={150} width={200} alt="Picture of the author" />
                                <h3>Audit citations</h3>
                            </Grid>
                            <Grid item xs={12} md={12} align='end' className={classes.text} style={{paddingRight:'5%'}} >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.btn}
                                >Watch A Demo
                                </Button>
                            </Grid>

                        </Grid>

                        <Grid container item xs={12} md={3} className={classes.user} >
                            <div align='center'  >
                                <h2 className={classes.userText}> {userTitle}</h2> <br /><br />
                                <Image {...imageProps} height={100} width={100} alt="Picture of the author" />
                                <Typography variant='h4' align='center'>{userName}</Typography>
                                <Typography variant='h6' align='center'>Head of SEO</Typography><br />
                                <Typography variant='h6' align='center'>iProspect</Typography>

                            </div>
                            
                            <div className={classes.text}>
                                <Image src={star} height={100} width={500} alt="Picture of the author" />
                            </div>
                        </Grid>


                    </Grid>
                
            </div>


        </div>
    );
}

export default Visibility;