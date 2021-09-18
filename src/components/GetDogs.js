import { Fragment, useEffect, useState } from "react";

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

    console.log(dogs);

    return (
        <Fragment>
            <h1>Dogs</h1>
        </Fragment>
    )
}

export default GetDogs;