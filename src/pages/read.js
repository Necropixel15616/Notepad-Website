import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {GetItem} from "../services";
import "../styles/read.css";
export function Read(){
    const [title, setTitle] = useState();
    const [message, setMessage] = useState();
    const { index } = useParams();
    
    useEffect(()=>{
        var notes = GetItem();
        var note = notes[index];
        setTitle(note.Title);
        setMessage(note.Message);
    }, [index])

    return(
        <div className="ReadContainer">
            <div className="titleBox">
                <h2>{title}</h2>
            </div>
            <div className="messageBox">
                <div>{message}</div>
            </div>
            <div className="btnBox">
                <Link to={"/"+index}><button>Edit</button></Link>
                <Link to={"/"}><button>Go Home</button></Link>
            </div>
        </div>
    )
}