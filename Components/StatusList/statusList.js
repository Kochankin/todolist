import {React, Component} from 'react'; 
import './statusList.css'; 
import StatusItem from '../StatusItem/statusItem';

const STATUSES = ["All", "Active", "Complete"];

class StatusList extends Component { 
    getStatusList(statusList){
        return statusList.map((status, index) => (
          <StatusItem 
            key={index} 
            onClick={() => this.props.onStatusClick(status)}
            value={status}
          />
        ));
      }
    render() { 
      return ( 
          <div className="status-list"> {this.getStatusList(STATUSES)} </div>
      ); 
    } 
  } 

  export default StatusList;