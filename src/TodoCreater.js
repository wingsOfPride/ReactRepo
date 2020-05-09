
import React, {Component} from 'react';

class TodoRow extends Component
{

    constructor(props){
        super(props);
        this.state = { newItemText: " "}
    }

    updateNewTextValue = (event) => {
        console.log(event.target.value)
        this.setState({ newItemText: event.target.value});
    }

    createNewTodo = (task) =>
    {
        if(!this.state.todoItems.find(item => item.action === task))
        {
            this.setState({
                todoItems: [ ...this.state.todoItems,
                {action: task,
                done: false}]
           
            });

        }

    }

    render = () => {
        return(

            <div className='my-1'>
            <input className='form-control' value={this.state.newItemText} onChange={this.updateNewTextValue} />

            <button className='btn btn-primary mt-1' onClick={this.props.callback.createNewTodo}> Add to do Task</button>
        </div>
        )

      
    }


}

export default TodoRow;