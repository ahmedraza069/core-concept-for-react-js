import { useState } from "react"

export default function Team(){

    const [team, setCount] = useState(0);

    const handleAdd = () =>{
        setCount(team + 1)
    }
const handleRemove = () =>{
    setCount(team - 1);
}

    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }

    return(
        <div style={teamStyle}>
            <h4>Players: {team}</h4>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Reduce</button>
        </div>
    )
}

