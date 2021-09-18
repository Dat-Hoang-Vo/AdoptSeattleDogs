import { Fragment, useEffect, useState } from "react";
//import DogProfile from "./DogProfile";

const GetDogs = () => {
    const [dogs, setDogs] = useState([]);

    const getDogs = async() => {
        try {
            const response = await fetch("https://phhjapgxwl.execute-api.us-east-1.amazonaws.com/dev/dogs");
            const jsonData = await response.json();
            setDogs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getDogs();      
    }, []);   

    //console.log(dogs);
    //console.log(dogs[0]);
    if (!dogs[0]) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <Fragment>
                <h1>Dogs</h1>
                <p>{dogs[0]['name']} {dogs[0]['cost']}</p>
            </Fragment>
        )
    }

    
}

export default GetDogs;