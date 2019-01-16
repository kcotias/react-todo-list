import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'


let AddTodo = ({ dispatch }) => {

  
  let input;

  return (
    <div className={'addToDo'}>
      <h1 className={'maintitle'}>TODO LIST</h1>
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
        <input 
          ref={node => (input = node)}
          className={'mainInput'}
          placeholder={'Adicione um item'}
        />
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo);

export default AddTodo;