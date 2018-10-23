import {React, Component} from 'react'; 
import './todoItemsList.css'; 
import TodoItem from '../TodoItem/todoItem';

class TodoItemsList extends Component { 
    getTodoItemsList(todos){
        return todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            onClick={() => this.props.onClick(todo)}
            value={todo}
          />
        ));
      }
    render() { 
      return ( 
          <div className="todo-item-list"> {this.getStatusList(this.props.todos)} </div>
      ); 
    } 
  } 

  export default TodoItemsList;