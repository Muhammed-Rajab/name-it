import "./App.css";
import { Header } from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import ResultContainer from "../ResultContainer/ResultContainer";
import { useState } from "react";
import name from "@rstacruz/startup-name-generator";

export const App = () => {
    const [names, updateNames] = useState([]);

    const onInputChange = (inputValue) => {
        updateNames(inputValue ? name(inputValue) : []);
    };
    return (
        <div className="container">
            <Header />
            <InputBox handleInputChange={onInputChange} />
            <ResultContainer namesArray={names} />
        </div>
    );
};

export default App;
