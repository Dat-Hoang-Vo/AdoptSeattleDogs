import '../css/DogProfile.css'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


const DogProfile = (props) => {
    const updateTraffic = () => {
        try {
            const response = fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/UpdateTraffic/$1".replace('$1', props.website), { method: 'PUT',});
        } catch (error) {
            console.error(error.message);
        }
    }


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
                <Typography variant="body2">{Math.floor(props.age / 12)} years {props.age % 12} months</Typography>
                <Typography variant="body2">Gender: {props.gender}</Typography>
                <Typography variant="body2">Size: {props.size}</Typography>
                <Typography variant="body2">Cost: ${props.cost}</Typography>
                <Typography variant="body2">{props.website}</Typography>
            </CardContent>
            <CardActions>
                <Button href={props.link} style={{position: 'absolute', bottom: '0'}} onClick={updateTraffic} >Visit</Button>
            </CardActions>
        </Card> 
        
    )
}

export default DogProfile;