import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import TextField from '@material-ui/core/TextField';


let AddTodo = ({ dispatch }) => {

  
  let input;

  return (
    <div className={'addToDo'}>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        
       
      <TextField
        inputRef={node => {
          input = node
        }}
        className={'mainInput'}
        label="Digite uma tarefa!"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo);

export default AddTodo;