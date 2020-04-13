import React from 'react'

 class TodoForm extends React.Component{
     constructor(){
         super();
         this.state = {
             task: ''
         };
     }
     
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.task);
      }
    
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ task: "" })
        this.props.addTask(event, this.state.task)
      }
      render(){
          console.log("TodoForm Props: ", this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text " 
                    placeholder="Todo"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}

                 />
                <button> Add Todo </button>

                {/* <button> Clear Completed </button> */}
            
            </form>
    )}
};

export default TodoForm;