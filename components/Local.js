import { Container, Grid, Button, Typography, } from "@material-ui/core";
import { makeStyles } from '@material-ui/core'
import Image from 'next/image'
// import head from '../public/Header_Image-1.png'
// import isg from '../public/lsg-graphic-dots-2x.png'
// import lsa from '../public/LSA_Image_3_Updated.png'
// import gmb from '../public/GMB_Image_3.png'
// import ct from '../public/CT_Header.png'
// import rep from '../public/reputation-manager_hero.png'
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../sanity";

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
    container: {
        marginTop: '7%',

    },
    color: {
        color: '#a5c559'
    },
    mainContainer: {
        backgroundColor: "#f9faf8",
        padding: '20px 20px'
    },
    container1: {
        paddingLeft: "70px"
    }


})

const Local = ({ secondSection }) => {
    console.log(secondSection)
    //section 0 no array
    const name1 = secondSection[0].name
    const title1 = secondSection[0].title
    const text1 = secondSection[0].text
    const image1 = secondSection[0].image
    //section 1 no array
    const name2 = secondSection[1].name
    const title2 = secondSection[1].title
    const text2 = secondSection[1].text
    const image2 = secondSection[1].image

    //section 2 no array
    const name3 = secondSection[2]?.name
    const title3 = secondSection[2]?.title
    const text3 = secondSection[2]?.text
    const image3 = secondSection[2]?.image
    //section 3 no array
    const name4 = secondSection[3]?.name
    const title4 = secondSection[3]?.title
    const text4 = secondSection[3]?.text
    const image4 = secondSection[3]?.image
    //section 4 no array
    const name5 = secondSection[4]?.name
    const title5 = secondSection[4]?.title
    const text5 = secondSection[4]?.text
    const image5 = secondSection[4]?.image
    //section 5 no array
    const name6 = secondSection[5]?.name
    const title6 = secondSection[5]?.title
    const text6 = secondSection[5]?.text
    const image6 = secondSection[5]?.image


    const firstImage = useNextSanityImage(
        sanityClient,
        image1,
    );
    const secondImage = useNextSanityImage(
        sanityClient,
        image2,
    );
    const thirdImage = useNextSanityImage(
        sanityClient,
        image3,
    );
    const fourthImage = useNextSanityImage(
        sanityClient,
        image4,
    );
    const fifthImage = useNextSanityImage(
        sanityClient,
        image5,
    );
    const sixthImage = useNextSanityImage(
        sanityClient,
        image6,
    );

    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>

            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <h3 className={classes.color}>{name1}</h3>
                        <h1>{title1}</h1>
                        <ul>
                            <li><h3>{text1[0].children[0].text}</h3></li>
                            <li><h3>{text1[1].children[0].text}</h3></li>
                            <li><h3>{text1[2].children[0].text}</h3></li>
                            <li><h3>{text1[3].children[0].text}</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Image {...firstImage} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <Image {...secondImage} alt="Picture of the author" />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.container1}>
                        <h3 className={classes.color}> {name2}</h3>
                        <h1>{title2}</h1>
                        <ul>
                            <li><h3>{text2[0].children[0].text}</h3></li>
                            <li><h3>{text2[1].children[0].text}</h3></li>
                            <li><h3>{text2[2].children[0].text}</h3></li>
                            <li><h3>{text2[3].children[0].text}</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            {/* 2nd part */}

            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <h3 className={classes.color}> {name3}</h3>
                        <h1>{title3}</h1>
                        <ul>
                            <li><h3>{text3[0].children[0].text}</h3></li>
                            <li><h3>{text3[1].children[0].text}</h3></li>
                            <li><h3>{text3[2].children[0].text}</h3></li>
                            <li><h3>{text3[3].children[0].text}</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Image {...thirdImage} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <Image {...fourthImage} alt="Picture of the author" />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.container1}>
                        <h3 className={classes.color}> {name4}</h3>
                        <h1>{title4}</h1>
                        <ul>
                            <li><h3>{text4[0].children[0].text}</h3></li>
                            <li><h3>{text4[1].children[0].text}</h3></li>
                            <li><h3>{text4[2].children[0].text}</h3></li>
                            <li><h3>{text4[3].children[0].text}</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            {/* 3rd part */}
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <h3 className={classes.color}>{name5}</h3>
                        <h1>{title5}</h1>
                        <ul>
                            <li><h3>{text5[0].children[0].text}</h3></li>
                            <li><h3>{text5[1].children[0].text}</h3></li>
                            <li><h3>{text5[2].children[0].text}</h3></li>
                            <li><h3>{text5[3].children[0].text}</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Image {...fifthImage} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <Image {...sixthImage} alt="Picture of the author" />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.container1}>
                        <h3 className={classes.color}> {name6}</h3>
                        <h1>{title6}</h1>
                        <ul>
                            <li><h3>{text6[0].children[0].text}</h3></li>
                            <li><h3>{text6[1].children[0].text}</h3></li>
                            <li><h3>{text6[2].children[0].text}</h3></li>
                            <li><h3>{text6[3].children[0].text}</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                </Grid>

            </Container>

        </div>
    );
}

export default Local;