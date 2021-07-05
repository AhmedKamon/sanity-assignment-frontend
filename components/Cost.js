import { Container, ButtonGroup, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
// import Title1 from '../public/title1.png'
// import Title2 from '../public/title2.png'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../sanity";

//styles
const useStyles = makeStyles({
    space: {
        paddingTop: '50px'
    },
    mainContainer: {
        backgroundColor: "#f9faf8",
        padding: '20px 20px'
    },
    text: {
        fontSize: '50px'
    }

})


const Cost = ({thirdSection}) => {

//sanity part
const {name, title, secondTitle, priceImage, featuresImage} = thirdSection[0]

const price = useNextSanityImage(
    sanityClient,
    priceImage
);
const features = useNextSanityImage(
    sanityClient,
    featuresImage
);

//toggle button part
    const classes = useStyles()
    const [toggled, setToggled] = useState(true);
    const toggleImage = () => setToggled(!toggled);

    return (
        <div className={classes.mainContainer}>
            <Container align='center'>
                <h1 className={classes.text}>{name}</h1>
                <h2>{title}</h2>
                <p>{secondTitle}</p>
            </Container>
            <div>
                <Container align='center'  >
                    <ButtonGroup disableElevation variant="contained" color="primary" className={classes.space}>
                        <Button onClick={toggleImage}>Features</Button>
                        <Button onClick={toggleImage}>Pricing</Button>
                    </ButtonGroup>
                    <div className={classes.space}>

                        {toggled ? <Image {...price} alt="Picture of the author" /> : <Image {...features} alt="Picture of the author" />}

                    </div>
                </Container>
            </div>
        </div>


    );
}

export default Cost;