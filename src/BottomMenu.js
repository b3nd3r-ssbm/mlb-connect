import { useContext } from "react";
import { DataContext } from "./DataProvider.js";

export function BottomMenu(){
    const { theseTeams, teams, getTheseTeams} = useContext(DataContext);

    const copy = () => {
        const url = window.location.origin + "/?teams=" + JSON.stringify(theseTeams).substring(1, JSON.stringify(theseTeams).length - 1).replaceAll('\"', '');
        navigator.clipboard.writeText(url);
        alert("Copied " + url + " to clipboard");
    }
    
    const newBoard = () => {
        getTheseTeams(teams);
    }

    return (
        <div style={{width:"100%",alignItems:"center",textAlign:"center"}}>
            <button onClick={copy}>Share Board</button>
            <button onClick={newBoard}>New Game</button>
        </div>
    )
}