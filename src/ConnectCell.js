import { AutoComplete } from "./AutoComplete.js";
import { DataContext } from "./DataProvider.js";
import { useContext, useState } from "react";
import './Cell.css';

export function ConnectCell(props){
    const { data, people, oldTeams } = useContext(DataContext);
    let [value, setValue] = useState("");
    const [incorrect, setIncorrect] = useState(false);
    const [flashGreen, setFlashGreen] = useState(false);

    const updateVal = (val) => {
        setValue(val);
    }

    const submitVal = (val) => {
        value = val;
        setTimeout(() => {check()}, 0)
    }

    
    function shareElement(arr1, arr2) {
        if(!arr1 || !arr2){
            return false;
        }
        const hash = {};
        for (const elem of arr1) {
          hash[elem] = true;
        }
        for (const elem of arr2) {
          if (hash[elem]) {
            return true;
          }
        }
        return false;
      }

    const check = () => {
        if(people[value] == null){
            wrongGuess();
            return;
        }
        let matches = people[value];
        for(let i of matches){
            if(shareElement(data[i]["teams"], oldTeams[props.teams[0]]) && shareElement(data[i]["teams"], oldTeams[props.teams[1]])){
                rightGuess();
                return;
            }
        }
        wrongGuess();
    }

    const wrongGuess = () => {
        setIncorrect(true);
        setTimeout(() => setIncorrect(false), 500);
    }

    const rightGuess = () => {
        props.setCorrect(props.row, props.col);
        console.log(props.correct);
        setFlashGreen(true);
        setTimeout(() => setFlashGreen(false), 500);
    }

    if(people.length == 0){
        return (
            <p>Loading list of players</p>
        )
    }

    return (
        <div style={{height:"100%", alignItems:"center"}} className={(incorrect ? 'flash-red' : '') + ' ' + (flashGreen ? 'flash-green' : '')}>
            { props.correct ? <span>{value}</span> : <AutoComplete submitVal={submitVal} list={Object.keys(people)} onInputChange={updateVal} onSubmit={check} value={value}></AutoComplete>}
        </div>
    )
}