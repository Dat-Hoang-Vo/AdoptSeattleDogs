import '../css/DogProfile.css'



const DogProfile = (props) => {
    const updateTraffic = () => {
        try {
            const response = fetch("https://u7sz06bt0e.execute-api.us-east-1.amazonaws.com/dev/UpdateTraffic/$1".replace('$1', props.website), { method: 'PUT',});
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <div>
            <a href={props.link} onClick={updateTraffic} >
                <img src={props.picture} style={{width: '14em', objectFit: 'contain', borderTopLeftRadius: '1vw', borderTopRightRadius: '1vw'}} />
            </a>
            <div style={{paddingBottom: '1vh'}}>
                <p>{props.name}</p>
                <p>{props.breed}</p>
                <p>{props.color}</p>
                <p>{Math.floor(props.age / 12)} years {props.age % 12} months</p>
                <p>Gender: {props.gender}</p>
                <p>Size: {props.size}</p>
                <p>Cost: {props.cost}</p>
                <p>{props.website}</p>
            </div>
            {/*
        <div style={{width: '14em', margin: '5vh 2vw 2vh 2vw', borderRadius: '1vw', backgroundColor: '#ffffff', display: "inline-block"}}>
            <a href={props.link} onClick={updateTraffic} >
                <img src={props.picture} style={{width: '14em', objectFit: 'contain', borderTopLeftRadius: '1vw', borderTopRightRadius: '1vw'}} />
            </a>
            <div style={{paddingBottom: '1vh'}}>
                <p>{props.name}</p>
                <p>{props.breed}</p>
                <p>{props.color}</p>
                <p>{Math.floor(props.age / 12)} years {props.age % 12} months</p>
                <p>Gender: {props.gender}</p>
                <p>Size: {props.size}</p>
                <p>Cost: {props.cost}</p>
                <p>{props.website}</p>
            </div>
        </div>
        */}
        </div>
        
    )
}

export default DogProfile;