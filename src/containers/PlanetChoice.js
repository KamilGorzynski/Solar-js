/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Radio from '../components/Radio';

const RadioContainer = styled.div`
    width 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-size: 22px;
    justify-content: space-between;
    margin: 0.5rem auto 0 auto;
    padding: 0.5rem;
    background-color: rgba(20, 20, 20, 0.904);
    // background-image: linear-gradient(to bottom, rgba(35, 35, 35, 0.904), rgba(61, 61, 61, 0.904));
    border-radius: 1rem;
    border: 2px rgba(46, 46, 46, 0.5) solid;
    color: #d3d3d3;
`
const PanelContent = styled.div`
    width 41%;
    display: flex;
    text-align: center;
    font-size: 22px;
    justify-content: space-between;
    margin: 0.5rem 1rem;
`


const PlanetChoice = ({ onChange }) => {

    return (    
                                
         <RadioContainer>
            <PanelContent>
                <Radio
                    name="planet"
                    label="Mercury"
                    value="0"
                    onChange={ onChange }
                />
                <Radio
                    name="planet"
                    label="Venus"
                    value="1"
                    onChange={ onChange }
                    
                />
            </PanelContent>   
            <PanelContent>
                <Radio
                    name="planet"
                    label="Earth"
                    value="2"
                    onChange={ onChange }
                    defaultChecked
                />
                <Radio
                    name="planet"
                    label="Mars"
                    value="3"
                    onChange={ onChange } 
                />
            </PanelContent>
            <PanelContent>
                <Radio
                    name="planet"
                    label="Jupiter"
                    value="4"
                    onChange={ onChange } 
                />
                <Radio
                    name="planet"
                    label="Saturn"
                    value="5"
                    onChange={ onChange } 
                />
            </PanelContent>
            <PanelContent>
                <Radio
                    name="planet"
                    label="Uranus"
                    value="6"
                    onChange={ onChange } 
                />
                <Radio
                    name="planet"
                    label="Neptun"
                    value="7"
                    onChange={ onChange } 
                />
            </PanelContent>
         </RadioContainer>       
    );
  }
  
  export default PlanetChoice;
  