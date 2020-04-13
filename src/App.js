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
    }

  }

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
  // For reference...

  // addItem = (e, item) => {
  //   console.log("First Groceries: ", this.state.groceries);
  //   e.preventDefault();

  //   const newItem = {
  //     name: item,
  //     id: Date.now(),
  //     purchased: false
  //   };

  //   this.setState({
  //     groceries: [...this.state.groceries, newItem]
  //   });
  //   console.log("Second Groceries: ", this.state.groceries);
  // };

  render() {
    return (
      <div>

        <TodoForm  addTask={this.addTask} />
        <TodoList todos={this.state.todos}/> 
        
      </div>
    );
  }
}

export default App;
