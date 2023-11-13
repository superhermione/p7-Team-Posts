import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { supabase } from "../client"
import PlayerCard from "../components/PlayerCard";
import './DisplayPlayers.css'


const DisplayPlayers = () => {
    const[players, setPlayers] = useState();

    useEffect(() => {
        fetchPlayers();
    }, [])

    const fetchPlayers = async () => {
        const {data} = await supabase.from('Players').select()
        console.log(data);
        setPlayers(data);
    }

    return(
        <div className="DisplayPlayersCards">
            {players && players.length > 0 ?
                players.map((player) =>    
                        <PlayerCard
                            id={player.id}
                            name={player.name}
                            skill={player.skill}
                            requirement={player.requirement}
                        />
                ): <h1> No Posts Found, Please Create a Post</h1>
            }
        </div>
    )
}

export default DisplayPlayers