const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

// retrieve all notes in the local storage on the browser
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

addNoteButton.addEventListener("click", () => addNote());

// save notes to the local storage on the clients browser
function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

// build an html element to create a note
function createNoteElement(id, content) {
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Sticky Note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    })

    element.addEventListener("dblclick", () => {
        const doDelete = confirm("Do you want to Delete?");

        if(doDelete) {
            deleteNote(id, element);
        }
    })

    return element;
}

// create a new note and save to the local storage
function addNote() {
    const existingNotes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 100000), 
        content: " "
    }
    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    existingNotes.push(noteObject);
    saveNotes(existingNotes);

}

// updates the content in the note with an id
function updateNote(id, newContent) {
    const existingNotes = getNotes();
    const targetNotes = existingNotes.filter(note => note.id == id)[0];

    targetNotes.content = newContent;
    saveNotes(existingNotes);
}

// deletes the note through its id and html element
function deleteNote(id, element) {
    const existingNotes = getNotes().filter(note => note.id != id);

    saveNotes(existingNotes);
    notesContainer.removeChild(element);
}