import { connect } from 'react-redux';
import * as components from '../components/Exampletodo.jsx';
import { addTodo, toggleTodo } from '../actions/ExampleActions.jsx';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(components.TodoList);
