import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = (props) => {
    function handleClick(){
      props.onDelete(props.id)
    }  
  return (
    <div id='my-created-notes'>
        <h3>{props.title}</h3>
        <p id='my-content'>{props.content}</p>
        <button id='delete-icon' onClick={handleClick}>
              <DeleteIcon />
            </button>
    </div>
  )
}

export default Notes