import React from "react";
import "./InputBox.css";
const InputBox = ({ handleInputChange }) => {
    return (
        <div className="inputBox-container">
            <input
                type="text"
                className="inputBox"
                placeholder="Type keyword"
                onChange={(e) => handleInputChange(e.target.value)}
            />
        </div>
    );
};
export default InputBox;
