/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Radio from '../components/Radio';
import { useContext} from 'react';
import {ReduxStoreContext} from './Container';
import config_pl from '../config/config_pl';
import config_en from '../config/config_en';

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

    const { state } = useContext(ReduxStoreContext);
    const { planet } = state.langVersion == 'EN' ? config_en : config_pl;

    return (                      
         <RadioContainer>
            <PanelContent>
                <Radio
                    name="planet"
                    label={ planet.mercury }
                    value="mercury"
                    onChange={ onChange }
                />
                <Radio
                    name="planet"
                    label={ planet.venus }
                    value="venus"
                    onChange={ onChange }
                    
                />
            </PanelContent>   
            <PanelContent>
                <Radio
                    name="planet"
                    label={ planet.earth }
                    value="earth"
                    onChange={ onChange }
                    defaultChecked
                />
                <Radio
                    name="planet"
                    label={ planet.mars }
                    value="mars"
                    onChange={ onChange } 
                />
            </PanelContent>
            <PanelContent>
                <Radio
                    name="planet"
                    label={ planet.jupieter }
                    value="jupieter"
                    onChange={ onChange } 
                />
                <Radio
                    name="planet"
                    label={ planet.saturn }
                    value="saturn"
                    onChange={ onChange } 
                />
            </PanelContent>
            <PanelContent>
                <Radio
                    name="planet"
                    label={ planet.uranus }
                    value="uranus"
                    onChange={ onChange } 
                />
                <Radio
                    name="planet"
                    label={ planet.neptune }
                    value="neptune"
                    onChange={ onChange } 
                />
            </PanelContent>
         </RadioContainer>       
    );
  }
  
  export default PlanetChoice;
  