import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // console.log(this.props)
  }
  render() {
    return (
      <ul>
        {this.props.todos && this.props.todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => {this.props.toggleTodo(todo.id)}} />
        ))}
      </ul>
      )
  }
}
// const TodoList = ({ todos, toggleTodo }) => {
//   // console.log(todos, toggleTodo)
//   return (
//   <ul>
//     {todos && todos.map((todo, index) => (
//       <Todo key={index} {...todo} onClick={() => {toggleTodo(todo.id)}} />
//     ))}
//   </ul>
//   )
// }


export default TodoList