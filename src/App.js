import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



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

  createNewTodo =() => {
if(!this.state.todoItems.find(item => item.action === this.state.newItemText))
{
  this.setState({
    todoItems: [ ...this.state.todoItems,
              {action: this.state.newItemText,
              done: false}],
              newItemText: ""

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


    todoTableRows =() => {
      this.state.todoItems.map
        (item => 
        
          <tr key={item.action}>
            <td>
            {item.action}
            </td>
            <td>
            <input type='checkbox' checked={item.done}
              onChange={() => this.toggleTodo(item)}></input>  

            </td>
          </tr>
        
        );
    }

render(){
return(

  <div>
    <h4 className="bg-primary text-white text-center p-2">
      {this.state.userName}'s Todo List ({this.state.todoItems.filter(t=> !t.done).length}) items todo
    </h4>
    <div className='container-fluid'>
      <div className='m-1'>
        <input className='form-control'
                value= {this.state.newItemText}
                onChange={this.updateNewTextValue}/>

                <button className='btn btn-danger mt-1' onClick={this.createNewTodo}>
                  Add a New Tasks
                </button>

      </div>
    </div>
    
  </div>
)

}

}

export default App;
