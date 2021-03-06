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

    const [gender, setGender] = useState();

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
            setAge(<Typography variant="body2" style={{display: 'inline'}}>{yearText} {monthText} old</Typography>)
        }
    }

    const [cost, setCost] = useState();

    const handleCost = () => {
        if (props.cost === -1) {
            setCost(<Typography variant="body2">Fee: Not Listed</Typography>)
        } else {
            setCost(<Typography variant="body2">Fee: ${props.cost}</Typography>)
        }
    }

    const handleGender = () => {
        let pgender = props.gender;
        if (pgender === "m" || pgender === "M") {
            setGender("Male");
        } else if (pgender === "f" || pgender === "F") {
            setGender("Female");
        } else {
            setGender("Unknown");
        }
    }

    useEffect(() => {
        handleAge();
        handleCost();
        handleGender();
    }, [props.update])


    return (
        <a href={props.link} style={{textDecoration: 'none'}} onClick={updateTraffic}>
        <Card style={{height: '100%', position: 'relative', borderRadius: '1vw'}}>
            <CardMedia
                component="img"
                image={props.picture}
                alt="dog picture"
                style={{width: '100%', height: '22vh', objectFit: 'cover'}}
            />
            <CardContent>
                <Typography variant="h5">{props.name}</Typography>
                <Typography variant="body2">{props.color}, {props.breed}</Typography>
                {age}
                <Typography variant="body2" style={{display: 'inline'}}>, {gender}</Typography>

                <div>
                    <Typography variant="body2" sx={{float: 'left'}}>Size: {props.size}</Typography>
                    <span style={{float: 'right'}}>
                        {cost}
                    </span>
                </div>
                
            </CardContent>
        </Card>
        </a>
        
    )
}

export default DogProfile;