import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
          {
            task: 'Time',
            id: 11,
            completed: false
          },
          {
            task: 'Life',
            id: 88,
            completed: false
          },
        ],
    };
  }

  togComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, 
            completed: !todo.completed,
          };
        } else {
          return todo;
        } 
      }),
    });
  };

  addThing = (taskArg) => {
    const newTodo = {
      task: taskArg,
      id: 0,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  render() {
    return (
      <div>
        <h1>❂</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm addThing={this.addThing} />
      </div>
    );
  }
}

export default App;