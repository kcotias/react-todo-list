import { connect } from 'react-redux'
import { toggleTodo, removeTodo, editTodo, changeTodo } from '../redux/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditClick: id => {
      dispatch(editTodo(id))
    },
    onChangeTodo: (text, id) => {
      dispatch(changeTodo(text, id))
    },
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onRemoveClick: id => {
      dispatch(removeTodo(id));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList