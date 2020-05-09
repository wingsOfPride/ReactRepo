import React, { Component } from 'react';
import './App.css';

import TodoBanner from './TodoBanner';
import TodoRow from './TodoRow';
import TodoCreater from './TodoCreater';



class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      userName: 'Vaughn',
      todoItems:[
        {action: 'Buy a flowers', done: false},
        {action: 'Do Workout', done: true},
        {action: 'Study Programming', done: false},
        {action: 'Call a friend', done: true},
      ],
      newItemText: " "
    }
  }

  updateNewTextValue = (event) => 
  {
    this.setState({
      newItemText: event.target.value
    });
  }

  createNewTodo = (task) => {
if(!this.state.todoItems.find(item => item.action === task))
{
  this.setState({
    todoItems: [ ...this.state.todoItems,
              {action: task,
              done: false}]

  });
}

  }

  changeStateData = () => {
    this.setState({
      userName: 'Darwish',
   

    });
  }

  toggleTodo = (todo) => this.setState({ todoItems: 
    this.state.todoItems.map(item => item.action === todo.action ? {...item,done: !item.done} : item )});


    todoTableRows = () => {
      return(
      
        this.state.todoItems.map
        (item => 
     
          <TodoRow key={item.action}  item={item} callback={this.toggleTodo}/>
     
       
        )
      )
    
      
 
    }

render() {
return(

  <div>
    <TodoBanner name={this.state.userName} tasks={this.state.todoItems}/>
    <div className='container-fluid'>

    <TodoCreater callback={this.createNewTodo}/>
      
     
      {
      /* <div className='m-1'>
        <input className='form-control'
                value= {this.state.newItemText}
                onChange={this.updateNewTextValue}/>

                <button className='btn btn-danger mt-1' onClick={this.createNewTodo}>
                  Add a New Tasks
                </button>

      </div> */}
    </div>
    <div>
      <table className='table table-striped'>
        <thead>
  <tr>
    <th>
      Todo Task Name
    </th>
    <th>
      Done
    </th>
  </tr>
        </thead>
      <tbody>
      { this.todoTableRows()}
      </tbody>
          
     
      </table>
    </div>
    
  </div>
)

}

}

export default App;
