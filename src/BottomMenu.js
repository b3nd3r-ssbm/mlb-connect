import { useContext } from "react";
import { DataContext } from "./DataProvider.js";

export function BottomMenu(props){
    const { theseTeams, teams, getTheseTeams, setCorrect} = useContext(DataContext);

    const copy = () => {
        let url = window.location.toString() + "?teams=" + JSON.stringify(theseTeams).substring(1, JSON.stringify(theseTeams).length - 1).replaceAll('\"', '');
        if(window.location.toString().includes('?')){
            url = window.location.toString().substring(0, window.location.toString().indexOf('?')) + "?teams=" + JSON.stringify(theseTeams).substring(1, JSON.stringify(theseTeams).length - 1).replaceAll('\"', '');
        }
        navigator.clipboard.writeText(url);
        alert("Copied " + url + " to clipboard");
    }
    
    const clearBoard = () => {
        setCorrect([[false, false, false], [false, false, false], [false, false, false]]);
    }

    const newBoard = () => {
        clearBoard();
        getTheseTeams(teams);
    }

    return (
        <div style={{width:"100%",alignItems:"center",textAlign:"center"}}>
            <button style={{width:"11%",fontSize:"18px"}} onClick={copy}>Share Board</button>
            <button style={{width:"11%",fontSize:"18px"}} onClick={clearBoard}>Clear Board</button>
            <button style={{width:"11%",fontSize:"18px"}} onClick={newBoard}>New Game</button>
        </div>
    )
}