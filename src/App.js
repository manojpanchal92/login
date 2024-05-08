import { useState } from 'react';
import './App.css';
import Notes from './Components/Notes';
import Todo from './Components/Todo';
// import Usercontext from './Context/Usercontext';
// import Login from './Forms/Login';
// import Signup from './Forms/Signup';
// import Parent from './Parent/Parent';



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        newNotes
      ]
    })
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((each, index) => {
        return index != id;
      })
    })
  }
  return (
    <div className="App my-app">
      {/* <Header /> */}
      <Todo onAdd={addNote} />
      {notes.map((eachNote, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteNote} />
        )
      })}
      {/* <About/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

