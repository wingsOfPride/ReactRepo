
import React, {Component} from 'react';

class TodoBanner extends Component
{

    render = () => 

    <h4 className='bg-primary text-white text-center p-2'>
        {this.props.name}'s Todo List
        ({this.props.tasks.filter(t => !t.done).length } item to do )
    </h4>


}

export default TodoBanner;