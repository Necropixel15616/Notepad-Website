import React from 'react';
import "../styles/header.css";
import {useHistory} from "react-router-dom";

export function Header(){
    const history = useHistory();
    function Clear()
    {
        history.push("/");
        localStorage.removeItem("Notes");
        window.location.reload();
    }
    return(
        <div className="headerContainer">
            <div className="headerText">
                <h1>React Notepad</h1>
            </div>
            <div className="ClearAllContainer">
                <button className="btnClearAll" onClick={Clear}>Clear All Notes</button>
            </div>
        </div>
    )
}