import React from "react";
import "./input.css";

const Input = ({onData}) => {
    let data = ""
    let input = null

    return (
        <div className="input">
            <input className="new-task" type="text" placeholder="write ToDo..." onChange={(e) => {
                data = e.target.value
                input = e.target
                // console.log(input)
                }}></input>
            <button type="button" className="btn-save" onClick={() => {
                input.value = ""
                onData(data)
                }}></button>
        </div>
    );
};

export default Input;
