import React from 'react'
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList(props){
    console.log("TODO List Props: ", props);

    return(
        <div>
            {props.todos.map(task => (
                <Todo key={task.id} task={task} />
            ))}
            <p>TODOList COMP</p>
        </div>
    )
};

export default TodoList