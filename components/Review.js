import { Container, Grid, makeStyles, Paper, Link } from "@material-ui/core";
import * as React from 'react';
import Image from "next/dist/client/image";
import Typography from '@material-ui/core/Typography';
// import review1 from '../public/review1.jpg'
// import review2 from '../public/review2.jpg'
// import review3 from '../public/review3.jpg'
// import capterra from '../public/capterra.png'
// import trustpilot from '../public/trustpilot-new.png'
// import croz from '../public/croz-medal.png'
// import gn from '../public/g2-medal.png'
import stars from '../public/Stars_4.5-1.png'
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { async } from "rxjs";
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../sanity";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
    main: {
        backgroundColor: "#f1f6f5",
        paddingTop: '100px ',
        paddingBottom: '50px'

    },
    mainBG: {
        backgroundColor: "#f1f6f5",
        paddingTop: '20px ',
    },

    text: {
        padding: '10px 50px 10px 10px'
    },
    bottom: {
        marginTop: '7%',
        marginBottom: '5%'
    }


})


const Review = ({ review, reviewImages }) => {
    //all images
    console.log(reviewImages[0].referenceList[0])
    const logo1 = useNextSanityImage(
        sanityClient,
        reviewImages[0].referenceList[0],
    );
    const logo2 = useNextSanityImage(
        sanityClient,
        reviewImages[0].referenceList[1],
    );
    const logo3 = useNextSanityImage(
        sanityClient,
        reviewImages[0].referenceList[2],
    );
    const logo4 = useNextSanityImage(
        sanityClient,
        reviewImages[0].referenceList[3],
    );
    //no 1
    const name1 = review[0].reviewName
    const quot1 = review[0].reviewQuot
    const image1 = review[0].reviewImage
    const address1 = review[0].reviewAddress

    const firstImage = useNextSanityImage(
        sanityClient,
        image1,
    );

    //no 1
    const name2 = review[1].reviewName
    const quot2 = review[1].reviewQuot
    const image2 = review[1].reviewImage
    const address2 = review[1].reviewAddress

    const secondImage = useNextSanityImage(
        sanityClient,
        image2,
    );

    //no 3
    const name3 = review[2].reviewName
    const quot3 = review[2].reviewQuot
    const image3 = review[2].reviewImage
    const address3 = review[2].reviewAddress

    const thirdImage = useNextSanityImage(
        sanityClient,
        image3,
    );
   
    const classes = useStyles()

    return (

        <div className={classes.main}>
            <Typography variant='h2' align='center'>
                Dont just take our word for it...
            </Typography>
            <Container className={classes.mainBG}>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4} >
                            <Paper elevation={6} square style={{height:"750px"}} >
                                <Image {...firstImage} alt="Picture of the author" />
                                <div className={classes.text}>
                                    <h3>{quot1}</h3>
                                    <br />
                                    <br />
                                    <br />
                                    <p>{name1}</p>
                                    <h3>{address1}</h3>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Paper elevation={6} square style={{height:"750px"}} >
                                <Image {...secondImage} alt="Picture of the author" />
                                <div className={classes.text}>
                                    <h3>{quot2}</h3>
                                    <br />
                                    <br />
                                    <br />
                                    <p>{name2}</p>
                                    <h3>{address2}</h3>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Paper elevation={6} square style={{height:"750px"}} >
                                <Image {...thirdImage} alt="Picture of the author" />
                                <div className={classes.text} style={{ padding: '10px 50px 10px 10px' }}>
                                    <h3>{quot3}.</h3>
                                    <br />
                                    <br />
                                    <br />
                                    <p>{name3}</p>
                                    <h3>{address3}</h3>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container className={classes.bottom}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={8}>
                        <Grid item xs={6} md={3} align='center'>
                            <Image {...logo1} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>
                        <Grid item xs={6} md={3} align='center'>
                            <Image {...logo2} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>
                        <Grid item xs={6} md={3} align='center'>
                            <Image {...logo3} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>
                        <Grid item xs={6} md={3} align='center'>
                            <Image {...logo4} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>


                    </Grid>
                </Box>
            </Container>

        </div>
    );
}

export default Review;