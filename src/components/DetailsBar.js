import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DetailsBar.scss'

function DetailsBar ({icon, text}) {
    return (
      <div className="details-bar">
        <FontAwesomeIcon icon={icon} className="details-icon" />
        <span>{text}</span>
      </div>
    );
  }
  
  export default DetailsBar;