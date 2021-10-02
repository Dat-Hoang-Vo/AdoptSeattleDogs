import '../css/DogProfile.css'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';


const DogProfile = (props) => {
    const updateTraffic = () => {
        try {
            const response = fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/UpdateTraffic/$1".replace('$1', props.website), { method: 'PUT',});
        } catch (error) {
            console.error(error.message);
        }
    }

    const [age, setAge] = useState();

    const handleAge = () => {
        let years = Math.floor(props.age / 12);
        let months = props.age % 12;

        if (years === 0 && months === 0) {
            setAge(<Typography varant="body2">NewBorn</Typography>)
        } else{
            let yearText;
            let monthText;
            if (years === 1) {
                yearText = <span>{years} year</span>
            } else if (years > 1) {
                yearText = <span>{years} years</span>
            }

            if (months === 1) {
                monthText = <span>{months} month</span>
            } else if (months > 1) {
                monthText = <span>{months} months</span>
            }
            setAge(<Typography variant="body2">{yearText} {monthText}</Typography>)
        }
    }

    const [cost, setCost] = useState();

    const handleCost = () => {
        if (props.cost === -1) {
            setCost(<Typography variant="body2">Cost: Not Listed</Typography>)
        } else {
            setCost(<Typography variant="body2">Cost: ${props.cost}</Typography>)
        }
    }

    useEffect(() => {
        handleAge();
        handleCost();
    }, [])


    return (
        <Card style={{height: '100%', position: 'relative'}}>
            <CardMedia
                component="img"
                image={props.picture}
                alt="dog picture"
            />
            <CardContent>
                <Typography variant="h5">{props.name}</Typography>
                <Typography variant="body2">{props.breed}</Typography>
                <Typography variant="body2">{props.color}</Typography>
                {age}
                <Typography variant="body2">Gender: {props.gender}</Typography>
                <Typography variant="body2">Size: {props.size}</Typography>
                {cost}
                <Typography variant="body2">{props.website}</Typography>
            </CardContent>
            <CardActions>
                <Button href={props.link} style={{position: 'absolute', bottom: '0'}} onClick={updateTraffic} >Visit</Button>
            </CardActions>
        </Card> 
        
    )
}

export default DogProfile;