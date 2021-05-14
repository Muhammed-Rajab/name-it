import React from "react";
import "./Names.css";

const Names = ({ name }) => {
    return (
        <div className="result-name-wrapper">
            <span className="name">{name}</span>
        </div>
    );
};
export default Names;
