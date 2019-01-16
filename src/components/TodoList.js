import React from 'react'
import Card from './Card'

const TodoList = ({ todos, onTodoClick, onChangeTodo, onEditClick, onRemoveClick }) => (
  <div className={'todoList'}>
    {todos.map((todo, index) => (
      <Card 
        key={index} 
        {...todo} 
        onTodoChange={text => onChangeTodo(text,index)} 
        onClickEdit={() => onEditClick(index)} 
        onClick={() => onTodoClick(index)} 
        onRemove={() => onRemoveClick(index)} 
      />
    ))}
  </div>
)

export default TodoList;