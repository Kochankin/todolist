import {React, Component} from 'react'; 
import './todoItem.css'; 

class TodoItem extends Component { 
    render() { 
      return ( 
        <div className="todo-list__item">
            <span></span>
            <p > {this.props.value} </p>
            <span>  X </span>
        </div>
        
      ); 
    } 
  } 

  export default TodoItem;