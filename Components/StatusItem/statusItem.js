import {React, Component} from 'react'; 
import './statusItem.css'; 

class StatusItem extends Component { 
    render() { 
      return ( 
        <p className="status-list__item"> {this.props.value} </p>
      ); 
    } 
  } 

  export default StatusItem;