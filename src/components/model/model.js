import React from 'react'
import "./model.css"
import ClearIcon from '@material-ui/icons/Clear';

export default function Model(props) {
   return (
      <div className="background">
         <div className="model">{props.children}
         </div>
      </div>
   )
}
