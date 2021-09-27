import { Fragment, useEffect, useState } from "react";
import DogProfile from "./DogProfile";

const GetDogs = () => {
    const [dogs, setDogs] = useState([]);

    const [check, setCheck] = useState(false);

    const [renderDogs, setRenderDogs] = useState(false);

    const [dogsCard, setDogsCard] = useState([]);

    const handleCheck = () => {
        setCheck(!check);
    }

    const handleSubmit = () => {
        if (check) {
            getAgeAscDogs();
        } else {
            getDogs();  
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

    useEffect(() => {
        getDogs();
    }, [])

    useEffect(() => {
        setDogsCard(
            dogs.map((dog) => {
            return (
            <DogProfile name={dog['name']} picture={dog['picture']} breed={dog['breed']} color={dog['color']} gender={dog['gender']} size={dog['size']} age={dog['age']} cost={dog['cost']} link={dog['link']} />
            )
        })) 
    }, [renderDogs])   

 const comment = `
 {dogs.map((dog) => {
    return (
        <DogProfile name={dog['name']} picture={dog['picture']} breed={dog['breed']} color={dog['color']} gender={dog['gender']} size={dog['size']} age={dog['age']} cost={dog['cost']} link={dog['link']} />
    )
})}
 
 `

    if (!dogs[0]) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <Fragment>
                <div style={{display: 'flex', maxWidth: '100vw', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <input id="test" type="checkbox" onClick={handleCheck} />
                    <button onClick={handleSubmit} />
                    {dogsCard}
                </div>
            </Fragment>
        )
    }

    
}

export default GetDogs;