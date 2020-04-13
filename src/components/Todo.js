import React from 'react'



 function Todo(props){
     console.log('TODO Component Props: ', props)

    return(
        <div>
            <h1>{props.task.name}</h1>
        </div>
    )
};

export default Todo
