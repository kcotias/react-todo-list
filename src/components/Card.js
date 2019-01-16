import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux'
import { changeTodo, editTodo } from '../redux/actions'



let Card = ({ onClick, onClickEdit, onTodoChange, onRemove, completed, text, isInEdit, dispatch }) => {

  let input;

  const chooseTextType = () => {
    if(isInEdit){
      return(
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            onClickEdit();
            onTodoChange(input.value);
            input.value = ''
          }}
        >
          <input 
            ref={node => (input = node)}
            style={{marginLeft: 10}}
            className={'changetodo'}
            placeholder={text}
          />
        </form>
      );
    } else {
      return(
          <h3 style={{
          marginLeft: 10,
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? '#969696' : 'white'
          }}>{text}</h3> 
      );
    }
  }


  return(
    <div 
    style={{
      textAlign: 'center',
    }}
      className={'card'}>
      <div 
        className={'cardDivLeft'}
        style={{ width: '80%'}}
      >
      <div 
        onClick={onClick}
        style={{
          marginLeft: 10,
          alignSelf:'center',
          backgroundColor: completed ? '#25ff82': '#969696'
        }}
        className={'iconFill'}
      />
      {chooseTextType()}
      </div>
      <div 
        style={{ justifyContent: 'flex-end', width: '20%'}}
      >
      <IconButton >
        <Icon onClick={onClickEdit} color="disabled">edit</Icon>
      </IconButton>
      <IconButton >
        <Icon onClick={onRemove} color="disabled">clear</Icon>
      </IconButton>
      </div>
    </div>
      
  
);
      }

Card = connect()(Card);

export default Card;