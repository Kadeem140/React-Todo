import React from 'react'
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList(props){
    console.log("TODO List Props: ", props);
    return(
        <div>
            {props.todos.map(task => (
                <Todo
                 key={task.id} 
                 task={task} 
                 toggleTask={props.toggleTask} 
                 clearCompletedTask={props.clearCompletedTask}
                    
                 />
            ))}
            
        </div>
    )
};

export default TodoList