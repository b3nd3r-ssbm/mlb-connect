import { useState } from "react";
import './AutoComplete.css';

export function AutoComplete(props){
    const [autoFill, setAutoFill] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const handleInput = (e) => {
        let ret = [];
        for(let i of props.list){
            if(i.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){
                ret.push(i);
            }
        }
        setAutoFill(ret.slice(0,5));
        if(e.target.value == ""){
            setAutoFill([]);
        }
        props.onInputChange(e.target.value);
    }

    const handleFocus = () => {
        setTimeout(() => {setIsFocused(true)}, 100);
    };
    
    const handleBlur = (e) => {
        if (e.nativeEvent.explicitOriginalTarget && (e.nativeEvent.explicitOriginalTarget.className == "dropdown" || (e.nativeEvent.explicitOriginalTarget.parentElement && e.nativeEvent.explicitOriginalTarget.parentElement.className == "dropdown"))) {
            return;
        }
        setTimeout(() => setIsFocused(false), 0);
    };

    const handleOptionClick = (value) => {
        props.onInputChange(value);
        setAutoFill([]);
        setIsFocused(false);
        props.submitVal(value);
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            props.onSubmit();
        }
    }

    return (
        <div style={{position:"relative"}}>
            <input type="text" value={props.value} onChange={handleInput} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyPress}/>
            {isFocused && (
                <div>
                    {autoFill.map((option, index) => (
                        <p className="dropdown" key={index} style={{position:"relative", cursor:"pointer", "zIndex":1000, padding:"%", margin:"0px", width:"100%"}} onClick={() => handleOptionClick(option)}>
                            {option}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}
