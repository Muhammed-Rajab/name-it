import React from "react";
import Names from "../Names/Names";
import NoNames from "../Names/NoNames/NoNames";
import "./ResultContainer.css";

const ResultContainer = ({ namesArray }) => {
    const arrayOrError = (namesArray) => {
        if (namesArray.length > 0) {
            return namesArray.map((name, idx) => (
                <Names name={name} key={idx} />
            ));
        } else {
            return <NoNames />;
        }
    };
    return (
        <div className="result-container">
            <div className="result-wrapper">{arrayOrError(namesArray)}</div>
        </div>
    );
};
export default ResultContainer;
