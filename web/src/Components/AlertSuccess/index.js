import React from 'react'

import './style.css'

function AlertSuccess({ success, onclick }) {
  return (
    <div>
      {
        success ?
          <div className="infoSuccess success-fixed">
            {success}
            <p className="closeSuccess" onClick={onclick}>&times;</p>
          </div> : ''
      }
    </div>
  )
}

export default AlertSuccess
