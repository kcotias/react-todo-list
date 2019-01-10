import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const Card = ({ onClick, onRemove, completed, text }) => (
    <div 
    style={{
      textAlign: 'center',
    }}
      className={'card'}>
      <div 
        onClick={onClick}
        className={'cardDivLeft'}
        style={{ width: '80%'}}
      >
      <Icon 
        style={{marginLeft: 10, alignSelf:'center'}}
        color={completed ? "primary" : "error"}
        >
        {completed ? 'check_circle_outline': 'highlight_off'}
        </Icon>
      <h3 style={{marginLeft: 10, textDecoration: completed ? 'line-through' : 'none'}}>{text}</h3>
      </div>
      <div 
        style={{ marginTop: 5, width: '20%'}}
      >
      <IconButton >
        <Icon onClick={onRemove} color="error">clear</Icon>
      </IconButton>
      </div>
    </div>
      
  
)

export default Card