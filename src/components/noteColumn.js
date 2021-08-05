import React from 'react';
import "../styles/notesColumn.css";
import {GetItem, SetItem} from "../services";
import {Link, useHistory} from 'react-router-dom';

export function Column(){
    var notes = GetItem();
    var history = useHistory();
    function DeleteNote(note){
        history.push("/");
        notes.splice(notes.indexOf(note), 1);
        SetItem(notes);
        window.location.reload();
    }
    return(
        <div>
            <div className="listContainer">
                {notes.map((note)=>{
                    return(
                        <div key={notes.indexOf(note)} className="noteRowContainer">
                            <div className="titleListContainer">
                                <span>{notes.indexOf(note)+1}: </span>
                                <Link to={"/read"+notes.indexOf(note)}  className="btnTitle">{note.Title}</Link>
                            </div>
                            <div className="btnContainer">
                                <button className="btnDelete" onClick={()=>DeleteNote(note)}>X</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}