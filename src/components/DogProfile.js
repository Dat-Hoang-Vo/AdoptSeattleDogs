import '../css/DogProfile.css'

const DogProfile = (props) => {
    return (
        <div style={{width: '10vw', margin: '5vh 2vw 2vh 2vw', borderRadius: '1vw', backgroundColor: '#ffffff'}}>
            <a href={props.link}>
                <img src={props.picture} style={{width: '10vw', objectFit: 'contain', borderTopLeftRadius: '1vw', borderTopRightRadius: '1vw'}} />
            </a>
            <div style={{paddingBottom: '1vh'}}>
                <p>{props.name}</p>
                <p>{props.breed}</p>
                <p>{props.color}</p>
                <p>{props.age} months</p>
                <p>Gender: {props.gender}</p>
                <p>Size: {props.size}</p>
                <p>Cost: {props.cost}</p>
            </div>
        </div>
    )
}

export default DogProfile;