import { Fragment, useEffect, useState } from "react";
import DogProfile from "./DogProfile";

const GetDogs = () => {
    const [dogs, setDogs] = useState([]);

    const [sortChoice, setSortChoice] = useState(0);

    const [renderDogs, setRenderDogs] = useState(false);

    const [dogsCard, setDogsCard] = useState([]);

    const handleAgeSort = () => {
        setSortChoice(1);
    }

    const handleCostSort = () => {
        setSortChoice(2);
    }

    const handleSubmit = () => {
        if (sortChoice === 0) {
            getDogs();  
        } else if (sortChoice === 1) {
            getAgeAscDogs();
        } else if (sortChoice === 2) {
            getCostAscDogs();
        }
    }

    const getDogs = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/dogs");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getAgeAscDogs = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/dogsAgeAsc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getCostAscDogs = async() => {
        try {
            const response = await fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/dogsCostAsc");
            const jsonData = await response.json();
            setDogs(jsonData);
            setRenderDogs(!renderDogs);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getDogs();
    }, [])

    useEffect(() => {
        setDogsCard(
            dogs.map((dog) => {
            return (
            <DogProfile name={dog['name']} picture={dog['picture']} breed={dog['breed']} color={dog['color']} gender={dog['gender']} size={dog['size']} age={dog['age']} cost={dog['cost']} link={dog['link']} website={dog['website_name']} />
            )
        })) 
    }, [renderDogs])   

    if (!dogs[0]) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{height: '96.4vh', width: '12vw', backgroundColor: 'white', position: 'sticky', top: '3.6vh'}}>
                    <div style={{paddingLeft: '0.5vw'}}>
                        <h2 style={{marginBottom: '.4vh'}}>Sort by:</h2>

                        <div>
                            <input id="name" name="sort" type="radio" onClick={() => {}} defaultChecked />
                            <label for="name" style={{display: 'inline'}}>Name</label>
                        </div>

                        <div>
                            <input id="age" name="sort" type="radio" onClick={handleAgeSort} />
                            <label for="age" style={{display: 'inline'}}>Age</label>
                        </div>

                        <div>
                            <input id="cost" name="sort" type="radio" onClick={handleCostSort} />
                            <label for="cost" style={{display: 'inline'}}>Cost</label>
                        </div>

                        <div>
                            <input id="gender" name="sort" type="radio" onClick={() => {}} />
                            <label for="gender" style={{display: 'inline'}}>Gender</label>   
                        </div>

                        <div>
                            <input id="size" name="sort" type="radio" onClick={() => {}} />
                            <label for="size" style={{display: 'inline'}}>Size</label>   
                        </div>

                        <div style={{marginTop: '1vh'}}>
                            <div>
                                <input id="asc" name="ordering" type="radio" onClick={() => {}} defaultChecked />
                                <label for="asc" style={{display: 'inline'}}>Ascending</label>   
                            </div>
                            <div>
                                <input id="desc" name="ordering" type="radio" onClick={() => {}} />
                                <label for="desc" style={{display: 'inline'}}>Descending</label>   
                            </div>
                        </div>

                        <button onClick={handleSubmit}>Sort</button>
                    </div>
                    
                </div>

                <div style={{maxWidth: '80vw', alignContent: 'center', marginLeft: 'auto'}}>
                    {dogsCard}
                </div>

                {/*
                <div style={{display: 'flex', maxWidth: '80vw', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {dogsCard}
                </div>
                */}
            </div>
        )
    }

    
}

export default GetDogs;