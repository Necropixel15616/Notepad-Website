import React, {useEffect, useState} from 'react';
import {GetItem, SetItem} from "../services";
import "../styles/form.css";
import { useParams, useHistory } from 'react-router-dom';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export function Form(){
    const history = useHistory();
    var [title, setTitle] = useState("");
    var [message, setMessage] = useState("");
    const [notes, setNotes] = useState([]);
    const { index } = useParams();

    useEffect(() => {
        const storedNotes = GetItem();
        setNotes(storedNotes);
        if (index) {
            let editNote = storedNotes[index];
            setTitle(editNote.Title);
            setMessage(editNote.Message);
        }
    }, [index]);
    

    function Save(title, message) {
        if(title != "" && message != ""){
            if (index) {
                notes[index] = {Title: title, Message: message}
            } else {
                var note = new Note(title, message);
                notes.push(note);
            }
            SetItem(notes);
            history.push("/");
            
        }
        toast("You cannot save empty values!", {position:"top-left"});
    }

    function Clear(){
        setTitle("");
        setMessage("");
    }
    function Home(){
        setTitle("");
        setMessage("");
        history.push("/");
    }
    
   
    return(
        <div style={{height:"100%", display:"grid", overflow:"hidden"}}>
            <form className="formContainer" onSubmit={()=>Save(title, message)} onReset={Clear}> 
                <div className="formInteriorContainer">
                    <div className="titleContainer">
                        <label className="label">Title: </label>
                        <input className="Title" placeholder="Type Title Here" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                    </div>
                    <br />
                    <div className="messageContainer">
                        <label>Message</label>
                        <br />
                        <textarea className="Message" placeholder="Write your Notes here" type="text" value={message} onChange={(event)=>setMessage(event.target.value)} />
                    </div>
                    <div className="ButtonContainer">
                        <input type="submit" value="Save" className="btns" style={{marginLeft:"40%"}}/>
                        <input type="reset" value="Clear" className="btns" style={{marginLeft:"2%"}} />
                        <input type="button" value="Go Home" className="btns" style={{marginLeft:"2%"}} onClick={Home} />
                    </div>
                </div>
            </form>
        </div>
    )
}

class Note{
    constructor(title, message){
        this.Title = title;
        this.Message = message;
    }
}