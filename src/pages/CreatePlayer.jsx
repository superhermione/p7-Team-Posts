import { useState } from "react"
import { supabase } from "../client"
import './CreatePlayers.css'



const CreatePlayer = () => {

    const[player, setPlayer] = useState({name: "", skill: "", requirement: ""});

    const createPlayer = async (event) => {
        event.preventDefault();
        await supabase.from('Players').insert(
            {
                name: player.name, 
                skill: player.skill, 
                requirement: player.requirement
            }).select();
        
            window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("key: ", name, " value: ", value);
        setPlayer( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return(
        <div className="createPlayerBox">
            <form>
                <label> Name </label>
                <input type="text" name="name" value={player.name} onChange={handleChange}/>
                <br/>

                <label> Skill </label>
                <input type="text" name="skill" value={player.skill} onChange={handleChange}/>
                <br/>

                <label> Looking for someone...</label>
                <textarea rows="5" cols="50" type="text" name="requirement" value={player.requirement} onChange={handleChange}/>
                <br/>

                <button className="submitButton" onClick={createPlayer}> Submit </button>
            </form>
        </div>
    )
}

export default CreatePlayer