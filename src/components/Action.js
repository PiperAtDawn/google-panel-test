import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Action.scss'

function Action ({icon, text}) {
    return (
      <div className="action">
        <FontAwesomeIcon icon={icon}/>
        <span>{text}</span>
      </div>
    );
  }
  
  export default Action;