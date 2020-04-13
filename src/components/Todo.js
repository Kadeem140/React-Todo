import React from 'react'



 function Todo(props){
     console.log('TODO Component Props: ', props.task)

    return(
        <div className='task'>
        // className={`task${props.task.completed ? " completed" : ""}`}
        onClick={()=> props.toggleTask(props.task.id)}>
            <h1>{props.task.name}</h1>
        </div>
    )
};

export default Todo
