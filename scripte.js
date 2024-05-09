const btnEl = document.getElementById("btn");
const contenerEl = document.getElementById("countiner");

btnEl.addEventListener("click", AddNote);

function AddNote() {
  const Createlement = document.createElement("textarea");
  Createlement.classList.add("note");
  Createlement.placeholder = "Empty Note";
  Createlement.rows = "10";
  Createlement.cols = "30";
  contenerEl.appendChild(Createlement);
  Createlement.addEventListener("dblclick", () => {
    const warning = confirm("Do you want delete this note");
    if (warning) {
      contenerEl.removeChild(Createlement);
    }
  });
}



// function AddNote() {
//   const note = getNotes();
//   const Noteobjects = {
//     id: Math.floor(Math.random() * 1000),
//     content: "",
//   };

//   const noteEl = createNoteEl(Noteobjects.id, Noteobjects.content);

//   contenerEl.insertBefore(noteEl, btnEl);
//   note.push(Noteobjects);
//   saveNote(note);
// }

// function saveNote(note) {
//   localStorage.setItem("note-app", json.stringify(note));
// }
// function getNotes() {
//   return JSON.parse(localStorage.getItem("note-app") || "[]");
// }
// getNotes().forEach((note) => {
//   const noteEl = createNoteEl(note.id, note.content);
//   contenerEl.insertBefore(noteEl, btnEl);
// });

// function createNoteEl(id, content) {
//   const element = document.createElement("textarea");
//   element.classList.add("note");
//   element.placeholder = "Empty Note";
//   element.value = content;
//   element.rows = "10";
//   element.cols = "30";
//   element.addEventListener("dblclick", () => {
//     const warning = confirm("Do you want to delete this note?");
//     if (warning) {
//       delete (id, content);
//     }
//   });

//   element.addEventListener("input", () => {
//     updateNote(id, element.value);
//   });
//   return element;
// }

// function deleteNote(id, element) {
//   const notes = getNotes().filter((note) => note.id != id);
//   saveNote(notes);
//   contenerEl.removeChild(element);
// }

// function updateNote(id, content) {
//   const notes = getNotes();
//   const target = notes.filter((note) => note.id == id)[0];
//   target.content = content;
//   saveNote(notes);
// }
