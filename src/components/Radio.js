/** @jsx jsx */
import { jsx } from '@emotion/core';
import './Radio.css';


const Radio = ({ name, label, value, onChange, defaultChecked }) => {
    return (                               
        <label className="container">{ label }
            <input type="radio" name={ name } value={ value } defaultChecked={defaultChecked}  onChange={onChange} />
            <span className="checkmark"></span>
        </label>        
    );
  }
  
  export default Radio;
  