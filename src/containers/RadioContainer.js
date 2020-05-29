/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './RadioContainer.css';


const PanelContent = styled.div`
    width 70%;
    display: flex;
    text-align: center;
    font-size: 22px;
    justify-content: space-between;
    margin: 0.5rem auto 0 auto;
   
`

const RadioContainer = ({fun}) => {
  return (
      <div>
        <PanelContent>                          
            <label className="container">Classic
                <input type="radio" name="radio" defaultChecked value='classic' onChange={fun} />
                <span className="checkmark"></span>
            </label>
            
            <label className="container">Milky way
                <input type="radio" name="radio" value='milkyWay' onChange={fun} />
                <span className="checkmark"></span>
            </label>
        </PanelContent> 
    </div>   


  );
}

export default RadioContainer;
