import React from 'react'
import './Display.css'

export default props => {

    let fontSize = '2.0em'

    if (props.value.length > 10) fontSize = "1.7em";
    if (props.value.length > 13) fontSize = "1.4em";

    return (
      <div className="display" style={{fontSize}}>
        {props.value}
      </div>
    );
}