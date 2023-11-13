import { Link } from 'react-router-dom'
import './PlayerCard.css'

const PlayerCard = (props) => {
    return(
        <div className="PlayerCard">
            <h2> {props.name} </h2>
            <h3> {props.skill} </h3>
            <p> {props.requirement} </p>
            <Link to={`/edit/${props.id}`}> Edit Player's Post</Link>
        </div>
    )
}

export default PlayerCard;