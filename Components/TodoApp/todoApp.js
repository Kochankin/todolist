import {React, Component} from 'react'; 
import './todoApp.css'; 
import Input from '../Input/input';
import StatusList from '../StatusList/statusList';
import TodoItemsList from '../TodoItemsList/todoItemsList';

class TodoApp extends Component { 
    render() { 
      return ( 
          <div className="todo-app"> 
              <Input />
              <TodoItemsList />
              <StatusList />
          </div>
      ); 
    } 
  } 

  export default TodoApp;