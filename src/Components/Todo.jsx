import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function expand() {
        setExpanded(true);
    }
    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })

    }
    function handleSubmit(event) {
        props.onAdd(note);
        setNote(
            {
                title: "",
                content: ""
            }
        )

    }
    return (
        <div id='note-body'>
            
            <form id='form-body'>
                {isExpanded &&
                    <input id='input-one'
                        name='title'
                        onChange={handleChange}
                        placeholder='Title'
                        value={note.title}
                      
                    />}

                <textarea
                id='text-area'
                    name="content"
                    onChange={handleChange}
                    rows={isExpanded ? 5 : 1}
                    onClick={expand}
                    placeholder='Take a note'
                    value={note.content}
                >
                </textarea>

                <Zoom in={isExpanded}>
                    <Fab onClick={handleSubmit} id='add' >
                        <AddIcon  />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea