import { Accordion, AccordionDetails, AccordionSummary, Button, Container, FormControlLabel, ImageList, Pagination, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

import dog1 from "../img/dog1compressed.jpg";
import dog2 from "../img/dog2compressed.jpg";
import dog3 from "../img/dog4compressed.jpg";

import { Radio, RadioGroup } from "@mui/material";

import { Grid } from "@mui/material";

import DogProfile from "./DogProfile";

const Home = () => {
    const [dogs, setDogs] = useState([]);

    const [fetchDogs, setFetchDogs] = useState(false);

    const GetAgeAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/age/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetAgeDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/age/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetBreedAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/breed/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetBreedDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/breed/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetCostAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/cost/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
        

        
    }

    const GetCostDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/cost/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
        

    }

    const GetGenderAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/gender/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetGenderDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/gender/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetNameAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/name/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetNameDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/name/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetSizeAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/size/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetSizeDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/size/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setFetchDogs(!fetchDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const [sort, setSort] = useState("age");

    const handleAge = () => {
        if (sort === "age") { return; }
        setPage(0);
        setSort("age");
    }

    const handleCost = () => {
        if (sort === "cost") { return; }
        setPage(0);
        setSort("cost");
    }

    const handleBreed = () => {
        if (sort === "breed") { return; }
        setPage(0);
        setSort("breed");
    }

    const handleGender = () => {
        if (sort === "gender") { return; }
        setPage(0);
        setSort("gender");
    }

    const handleName = () => {
        if (sort === "name") { return; }
        setPage(0);
        setSort("name");
    }

    const handleSize = () => {
        if (sort === "size") { return; }
        setPage(0);
        setSort("size");
    }

    const handleAscending = () => {
        if (order === "ascending") { return; }
        setOrder("ascending");
    }

    const handleDescending = () => {
        if (order === "descending") { return; }
        setOrder("descending");
    }

    const [updateDogs, setUpdateDogs] = useState(false);

    const [order, setOrder] = useState("ascending");

    const [dogPages, setDogPages] = useState([]);

    const [page, setPage] = useState(0);

    const [currentSlide, setCurrentSlide] = useState([]);

    const [finishedLoading, setFinishedLoading] = useState(false);

    // Fetch initial data
    useEffect(() => {
        if (order === "ascending") {
            if (sort === "age") {
                GetAgeAscending();
            } else if (sort === "cost") {
                GetCostAscending();
            } else if (sort === "breed") {
                GetBreedAscending();
            } else if (sort === "name") {
                GetNameAscending();
            } else if (sort === "size") {
                GetSizeAscending();
            } else if (sort === "gender") {
                GetGenderAscending();
            }
        } else if (order === "descending") {
            if (sort === "age") {
                GetAgeDescending();
            } else if (sort === "cost") {
                GetCostDescending();
            } else if (sort === "breed") {
                GetBreedDescending();
            } else if (sort === "name") {
                GetNameDescending();
            } else if (sort === "size") {
                GetSizeDescending();
            } else if (sort === "gender") {
                GetGenderDescending();
            }
        }
    }, [sort, order])

   
 

    useEffect(() => {
        var dogArray = [];
        var tempArray = [];
        var counter = 0;
        var index = 0;
        dogs.map((dog) => {
            if (counter >= 6) {
                index += 1;
                counter = 0;
                dogArray.push(tempArray);
                tempArray = [];
            }
            console.log(index + " " + dog['name']);
            tempArray.push(
                <Grid item xs={12} sm={6} md={4} lg={3} xl={4} style={{marginTop: '1vh'}}>
                    <DogProfile name={dog['name']} picture={dog['picture']} breed={dog['breed']} color={dog['color']} gender={dog['gender']} size={dog['size']} age={dog['age']} cost={dog['cost']} link={dog['link']} website={dog['website_name']} update={fetchDogs} />
                </Grid>
            )
            counter += 1;
        });
        dogArray.push(tempArray);
        setDogPages(dogArray);
        setUpdateDogs(!updateDogs);
    }, [fetchDogs])

    const loadDogs = () => {
        setCurrentSlide(dogPages[page].map((dogs) => {return(dogs);}));
        setFinishedLoading(true);
        setTimeout(() => {setShowDog1(true)}, 200)
        setTimeout(() => {setShowDog2(true)}, 400);
        setTimeout(() => {setShowDog3(true)}, 600);
    }

    const handlePageChange = (event, value) => {
        setPage(value - 1);
        setFetchDogs(!fetchDogs);
    }

    useEffect(() => {
        if (finishedLoading) {
            setCurrentSlide(dogPages[page].map((dogs) => {return(dogs);}));
        }
    }, [updateDogs, page])

    // Handle front dogs animation
    const [showDog1, setShowDog1] = useState(false);
    const [showDog2, setShowDog2] = useState(false);
    const [showDog3, setShowDog3] = useState(false);

    useEffect(() => {
        
    }, [])

    if (dogs[0]) {
    return(
        <div style={{backgroundColor: '#fff5eb', height: '100%'}} onLoad={loadDogs}>
            <h3 style={{textAlign: 'center', fontSize: '4vw', color: '#8b6bff', marginTop: '0', paddingTop: '10vh', marginBottom: '0'}}>Welcome them home</h3>

            <Container style={{textAlign: 'center', paddingTop: '3vh', paddingBottom: '3vh'}}>
                <a href="#pagination" style={{textDecoration: 'none'}}>
                <Button variant="contained" style={{backgroundColor: "#a3ffb9", width: '10vw', fontSize: '1vw'}}>See Dogs</Button>
                </a>
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

            <a href="#FAQs" style={{textDecoration: "none", color: "#8b6bff"}}>
            <Box style={{paddingLeft: '1vw', marginTop: '14vh'}}>
                <Typography variant="h1" style={{display: 'inline'}} id="FAQs">FAQs</Typography>
                <ArrowDownwardRoundedIcon style={{fontSize: '3vw', paddingLeft: '1vw'}} />
            </Box>
            </a>

            <Box style={{width: '40vw', paddingLeft: '2vw', marginTop: '2vh', paddingBottom: '40vh'}}>
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

            <Box style={{position: 'relative', left: '2vw', top: '36vh'}}>
                <Typography>Sort</Typography>
                <RadioGroup defaultValue="age">
                    <FormControlLabel value="age" control={<Radio />} label="age" onClick={handleAge}  />
                    <FormControlLabel value="cost" control={<Radio />} label="cost" onClick={handleCost} />
                    <FormControlLabel value="name" control={<Radio />} label="name" onClick={handleName}  />
                    <FormControlLabel value="breed" control={<Radio />} label="breed" onClick={handleBreed}  />
                    <FormControlLabel value="size" control={<Radio />} label="size" onClick={handleSize}  />
                    <FormControlLabel value="gender" control={<Radio />} label="gender" onClick={handleGender}  />
                </RadioGroup>
                <Typography>Order</Typography>
                <RadioGroup defaultValue="ascending">
                    <FormControlLabel value="ascending" control={<Radio />} label="ascending" onClick={handleAscending} />
                    <FormControlLabel value="descending" control={<Radio />} label="descending" onClick={handleDescending} />
                </RadioGroup>
            </Box>
            <Container>
                
                <Grid item xs={7.5} sm={8.6} md={9.7} lg={9.8} xl={12}>
                    <Grid container spacing={8}>
                        {currentSlide}      
                    </Grid>
                </Grid>
            </Container>

            <Container style={{paddingBottom: '2vh', marginTop: '1vh'}}>
                <Pagination size="large" page={page + 1} count={dogPages.length} variant="outlined" onChange={handlePageChange} id="pagination" />
            </Container>
            
        </div>
    )} else {
        return(<div><p>Loading!</p></div>);
    }
}

export default Home;