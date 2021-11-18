import { Accordion, AccordionDetails, AccordionSummary, Button, Container, FormControlLabel, ImageList, Pagination, Slide, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

import dog1 from "../img/dog1compressed.jpg";
import dog2 from "../img/dog2compressed.jpg";
import dog3 from "../img/dog4compressed.jpg";

import runningdog from "../img/runningdog.png";
import quote from "../img/quote.png";

import { Radio, RadioGroup } from "@mui/material";

import { Grid } from "@mui/material";

import DogProfile from "./DogProfile";
import { Link } from "react-router-dom";

const Home = () => {
    const loadDogs = () => {
        setTimeout(() => {setShowDog1(true)}, 200)
        setTimeout(() => {setShowDog2(true)}, 400);
        setTimeout(() => {setShowDog3(true)}, 600);
    }

    // Handle front dogs animation
    const [showDog1, setShowDog1] = useState(false);
    const [showDog2, setShowDog2] = useState(false);
    const [showDog3, setShowDog3] = useState(false);

    return(
        <div style={{height: '99.9vh', width: '99.9vw', backgroundColor: '#e5e5e5'}} onLoad={loadDogs}>
            <div style={{height: '60vh', paddingTop: '10vh', paddingLeft: '5vw'}}>
                <Grid container>
                    <Grid item xl={2}>
                        <Stack spacing={2}>
                            <Link to={{pathname: '/'}} style={{textDecoration: 'none', color: '#204e4a' }}>
                                <Typography variant="h3">
                                    HOME
                                </Typography>
                            </Link>

                            <Link to={{pathname: '/dogs'}} style={{textDecoration: 'none', color: '#393d3f'}}>
                                <Typography variant="h3">
                                    DOGS
                                </Typography>
                            </Link>

                            <Link to={{pathname: '/'}} style={{textDecoration: 'none', color: '#393d3f'}}>
                                <Typography variant="h3">
                                    CHARITY
                                </Typography>
                            </Link>

                            <Link to={{pathname: '/'}} style={{textDecoration: 'none', color: '#393d3f'}}>
                                <Typography variant="h3">
                                    FAQ
                                </Typography>
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid item xl={9}>
                        <Container style={{textAlign: 'center'}}>
                            <span>
                            <Slide direction="left" in={showDog1} timeout={{enter: 800}}>
                                <img src={dog1} style={{width: '15vw', marginRight: '2vw', borderRadius: '2vh'}} />
                            </Slide>
                            </span>

                            <span>
                            <Slide direction="left" in={showDog2} timeout={{enter: 800}}>
                                <img src={dog2} style={{width: '15vw', borderRadius: '2vh'}} />
                            </Slide>
                            </span>

                            <Slide direction="left" in={showDog3} timeout={{enter: 800}}>
                                <img src={dog3} style={{width: '15vw', marginLeft: '2vw', borderRadius: '2vh'}} />
                            </Slide>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container sx={{paddingTop: '5vh'}}>
                    <Grid item xl={7}>
                    <img src={quote} style={{width: '45vw'}} />
                    </Grid>
                    <Grid item xl={5}>
                        <img src={runningdog} style={{width: '20vw'}} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )

    /*
    return(
        <div style={{height: '100%', backgroundColor: '#fff5eb'}} onLoad={loadDogs}>
            <div style={{height: '88vh'}}>
            <h3 style={{textAlign: 'center', fontSize: '4vw', color: '#8b6bff', marginTop: '0', paddingTop: '10vh', marginBottom: '0'}}>Welcome them home</h3>

            <Container style={{textAlign: 'center', paddingTop: '3vh', paddingBottom: '3vh'}}>
                <Link to={{pathname: "/dogs"}} style={{textDecoration: 'none'}}>
                    <Button variant="contained" style={{backgroundColor: "#a3ffb9", width: '10vw', fontSize: '1vw'}}>See Dogs</Button>
                </Link>
            </Container>

            <Container style={{textAlign: 'center'}}>
                <span>
                <Slide direction="up" in={showDog1} timeout={{enter: 800}}>
                    <img src={dog1} style={{width: '15vw', marginRight: '2vw'}} />
                </Slide>
                </span>

                <span>
                <Slide direction="up" in={showDog2} timeout={{enter: 800}}>
                    <img src={dog2} style={{width: '15vw'}} />
                </Slide>
                </span>

                <Slide direction="up" in={showDog3} timeout={{enter: 800}}>
                    <img src={dog3} style={{width: '15vw', marginLeft: '2vw'}} />
                </Slide>
                
                
            </Container>
            </div>

            <div style={{height: '12vh'}}>
            <a style={{textDecoration: "none", color: "#8b6bff"}}>
            <Box style={{paddingLeft: '1vw'}}>
                <Typography variant="h1" style={{display: 'inline'}} id="FAQs">FAQs</Typography>
                <ArrowDownwardRoundedIcon style={{fontSize: '3vw', paddingLeft: '1vw'}} />
            </Box>
            </a>
            </div>

            
            <Box style={{width: '40vw', paddingLeft: '2vw', marginTop: '2vh', height: '88vh'}}>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h5">What is this site?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="paragraph">This website contains a compilation of adoptable dogs in the Greater Seattle Area!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h5">Why did you create it?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="paragraph">I found that sorting and looking for dogs across a ton of websites to be daunting so I wanted to create a place that contains a lot that I can look through quickly.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h5">How do you find the dogs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="paragraph">A webscraper fetches data from various adoption sites in the Seattle area and displays it here.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h5">Where do I adopt the dogs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="paragraph">Each dog will have a link that takes you to its origin site so you can start the adoption process with the shelter that they're currently in!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h5">Are the three dogs on your home screen adoptable?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="paragraph">Nope!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h5">Why does the site look so bad on mobile?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="paragraph">Designing for mobile is hard. I didn't bother to do it.</Typography>
                </AccordionDetails>
            </Accordion>
            </Box>
        </div>
    )
    */
}

export default Home;