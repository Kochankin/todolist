import {React, Component} from 'react'; 
import './input.css'; 

class Input extends Component { 
    render() { 
      return ( 
        <div className="todo-input">
            <input type="text" placeholder="Add Todo" onChange={this.props.onChange}/>
            <span> X </span>
        </div>
      ); 
    } 
  } 

  export default Input;
