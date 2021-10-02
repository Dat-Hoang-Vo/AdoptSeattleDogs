import { Fragment, useEffect, useState } from "react";
import DogProfile from "./DogProfile";
import { FormControl, FormLabel, FormControlLabel, Radio, RadioButton, RadioGroup, Button, Grid, Container, SwipeableDrawer, IconButton, Typography, AppBar, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system";

const GetDogs = () => {
    const [dogs, setDogs] = useState([]);

    const [sortChoice, setSortChoice] = useState(0);

    const [orderChoice, setOrderChoice] = useState('Ascending');

    const [renderDogs, setRenderDogs] = useState(false);

    const [dogsCard, setDogsCard] = useState([]);

    const handleNameSort = () => {
        setSortChoice(0);
    }

    const handleAgeSort = () => {
        setSortChoice(1);
    }

    const handleCostSort = () => {
        setSortChoice(2);
    }

    const handleGenderSort = () => {
        setSortChoice(3);
    }

    const handleSizeSort = () => {
        setSortChoice(4);
    }

    const handleAscendingOrder = () => {
        setOrderChoice('Ascending');
    }

    const handleDescendingOrder = () => {
        setOrderChoice('Descending');
    }

    const handleSubmit = () => {
        if (orderChoice === 'Ascending') {
            if (sortChoice === 0) {
                GetNameAscending();
            } else if (sortChoice === 1) {
                GetAgeAscending();
            } else if (sortChoice === 2) {
                GetCostAscending();
            } else if (sortChoice === 3) {
                GetGenderAscending();
            } else if (sortChoice === 4) {
                GetSizeAscending();
            }
        } else {
            if (sortChoice === 0) {
                GetNameDecending();
            } else if (sortChoice === 1) {
                GetAgeDescending();
            } else if (sortChoice === 2) {
                GetCostDescending();
            } else if (sortChoice === 3) {
                GetGenderDescending();
            } else if (sortChoice === 4) {
                GetSizeDescending();
            }
        }
        console.log(dogs);
    }

    const GetAgeAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/age/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetAgeDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/age/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetCostAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/cost/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
        

        
    }

    const GetCostDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/cost/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
        

    }

    const GetGenderAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/gender/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetGenderDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/gender/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetNameAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/name/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetNameDecending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/name/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetSizeAscending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/size/asc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const GetSizeDescending = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/get/dogs/size/desc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        GetNameAscending();
    }, [])

    useEffect(() => {
        setDogsCard(
            dogs.map((dog) => {
            return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <DogProfile update={renderDogs} name={dog['name']} picture={dog['picture']} breed={dog['breed']} color={dog['color']} gender={dog['gender']} size={dog['size']} age={dog['age']} cost={dog['cost']} link={dog['link']} website={dog['website_name']} />
                </Grid>
            )
        })) 
    }, [renderDogs])   

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    if (!dogs[0]) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <Box>
                <AppBar style={{zIndex: '1400', position: 'sticky', top: '0'}}>
                    <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleOpen}
                            >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4">AdoptSeattleDogs</Typography>
                    </Toolbar>
                </AppBar>

                <Grid container>
                    <Grid item xs={4} sm={3} md={2} lg={2} xl={1.6}>
                    <SwipeableDrawer
                        anchor="left"
                        open={open}
                        variant='persistent'
                        onClose={() => {}}
                        onOpen={() => {}}
                    >
                        <div style={{position: 'sticky', top: '5em', paddingLeft: '1vw', paddingRight: '2vw'}}>
                            <FormControl>

                                <FormLabel component="legend">Sort by</FormLabel>
                                <RadioGroup
                                    aria-label="Sort By"
                                    defaultValue="name"
                                    name="sort-by-radio-choices"
                                    >
                                        <FormControlLabel value="name" control={<Radio />} label="name" onClick={handleNameSort} />
                                        <FormControlLabel value="age" control={<Radio />} label="age" onClick={handleAgeSort} />
                                        <FormControlLabel value="cost" control={<Radio />} label="cost" onClick={handleCostSort} />
                                        <FormControlLabel value="gender" control={<Radio />} label="gender" onClick={handleGenderSort} />
                                        <FormControlLabel value="size" control={<Radio />} label="size" onClick={handleSizeSort} />
                                </RadioGroup>

                                <FormLabel component="legend">Order by</FormLabel>
                                <RadioGroup
                                    aria-label="Order by"
                                    defaultValue="ascending"
                                    name="order-by-radio-choices"
                                    >
                                    <FormControlLabel value="ascending" control={<Radio />} label="ascending" onClick={handleAscendingOrder} />
                                    <FormControlLabel value="descending" control={<Radio />} label="descending" onClick={handleDescendingOrder} />
                                </RadioGroup>

                                <Button variant="outlined" onClick={handleSubmit} >Sort</Button>
                            </FormControl>
                        </div>
                        
                    </SwipeableDrawer>        
                        
                    </Grid>

                    <Grid item xs={7.5} sm={8.6} md={9.7} lg={9.8} xl={9.8}>
                        <Grid container spacing={8}>
                            {dogsCard}      
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        )
    }

    
}

export default GetDogs;