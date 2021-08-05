export function SetItem(notes){
    notes = JSON.stringify(notes);
    localStorage.setItem("Notes", notes);
}

export function GetItem(){
    var notes = localStorage.getItem("Notes");
    if(notes){
        notes = JSON.parse(notes);
        return notes;
    }
    return [];
}