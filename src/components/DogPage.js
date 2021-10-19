import { Container, FormControlLabel, Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

import { Radio, RadioGroup } from "@mui/material";

import { Grid } from "@mui/material";

import DogProfile from "./DogProfile";

import homeIcon from "../img/icon.png";


const DogPage = () => {

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
                <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
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
        console.log("itemsLoaded")
        setCurrentSlide(dogPages[page].map((dogs) => {return(dogs);}));
        setFinishedLoading(true);
    }

    useEffect(() => {
        if (dogs[0]) {
            loadDogs();
        }
    }, [updateDogs])

    const handlePageChange = (event, value) => {
        setPage(value - 1);
        setFetchDogs(!fetchDogs);
    }

    useEffect(() => {
        if (finishedLoading) {
            setCurrentSlide(dogPages[page].map((dogs) => {return(dogs);}));
        }
    }, [updateDogs, page])



    if (dogs[0]) {
    return (
        <div style={{height: '100vh', backgroundColor: '#fff5eb'}}>
            <Grid container style={{paddingTop: '2vh'}}>
                
                <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
                    <img src={homeIcon} />
                    <Box style={{marginLeft: '1vw'}}>
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
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} xl={10.5}>
                    <Container style={{marginTop: '2vh'}}>
                        <Grid container spacing={8}>
                            {currentSlide}      
                        </Grid>
                    </Container>
                    <Container style={{marginTop: '1vh'}}>
                        <Pagination size="large" page={page + 1} count={dogPages.length} variant="outlined" onChange={handlePageChange} id="pagination" />
                    </Container>
                </Grid>

            </Grid>
        </div>
    )
    } else {
        return (<div style={{height: '100vh', backgroundColor: '#fff5eb'}}></div>)
    }
}

export default DogPage;