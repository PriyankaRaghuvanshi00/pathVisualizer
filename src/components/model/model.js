import React from 'react'
import "./model.css"
import ClearIcon from '@material-ui/icons/Clear';

export default function Model(props) {
   return props.show ? <div id="model" className="background" onClick={() => props.handler(null, false)}>
      <div className="popUp" >
         <div className="popUp-inner">
            {props.children}
         </div>
      </div>
   </div> : null;
   // <div id= className="background">
   //    <div className="model">{props.children}
   //    </div>
   // </div>

}
