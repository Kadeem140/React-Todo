import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state= {
        todos : [ ]
    };
  };

  addTask = (e, task) => {
      e.preventDefault();

      const newTask = {
        name: task,
        id: Date.now(),
        completed: false
      };

      this.setState({
        todos: [...this.state.todos, newTask]
      });
      console.log("Total Tasks to do: ", this.state.todos);

  };

  toggleTask = itemId => {
    console.log(itemId);

    this.setState({
      todos: this.state.todos.map(item => {       
        if (itemId === item.id) {
          // if they match, update the purchased boolean on that item
          return {
            ...item,
            completed: !item.completed
          };
          // this return generates the following obj:
          // { id: 123, name: "..Entered value", completed: true}
        }

        // if they don't match, just return the item
        return item;
      })
    });
  };

  clearCompletedTask = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask} />
        <TodoList
         todos={this.state.todos}
         toggleTask={this.toggleTask}
         clearCompletedTask= {this.clearCompletedTask}
         /> 
      </div>
    );
  }
}

export default App;
