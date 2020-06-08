/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {
    useEffect,
    useRef,
    useContext,
    useMemo
} from 'react';
import solarSystemArea from '../canvas/solarSystemArea';
import planet from '../canvas/planet';
import ControlPanel from './ControlPanel';
import PlanetChoice from './PlanetChoice';
import {ACTIONS, ReduxStoreContext} from './Container'

// images
import spaceImg from '../assets/space.jpg';
import spaceImg2 from '../assets/space2.jpg';
import sunIcon from '../assets/planetIcons/sun.png';
import mercuryIcon from '../assets/planetIcons/mercury.png';
import venusIcon from '../assets/planetIcons/venus.png';
import earthIcon from '../assets/planetIcons/earth.png';
import marsIcon from '../assets/planetIcons/mars.png';
import jupiterIcon from '../assets/planetIcons/jupiter.png';
import saturnIcon from '../assets/planetIcons/saturn.png';
import uranusIcon from '../assets/planetIcons/uranus.png';
import neptunIcon from '../assets/planetIcons/neptun.png';


const CanvasContainer = styled.div`
  width: 800px;
  background-image: url(${spaceImg});
  background-size: cover;
  position: relative;
  z-index: 2;
  margin: 0rem auto;
  border-radius: 1.5rem;
  border: 2px rgba(46, 46, 46, 0.904) solid;
`

const SunIcon = styled.img`
  width: 4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`
const Axis = styled.div`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 100rem;
  border: 1px dashed white;
  z-index: -1;
`

const Solar = () => {
    const { dispatch } = useContext(ReduxStoreContext);

    let solarArea = solarSystemArea(updateGameArea);

    const canvasContainer = useRef(null);

    const planetList = []
    let factor = 1;
    
    const planetDataList = [
        ["mercury", 4.15 * factor, 1.1, mercuryIcon, 337, 400, solarArea],
        ["venus", 1.6 * factor, 1.8, venusIcon, 295, 400, solarArea],
        ["earth", 1 * factor, 2.5, earthIcon, 256, 400, solarArea],
        ["mars", 0.53 * factor, 3.2, marsIcon, 215, 400, solarArea],
        ["jupiter", 0.084 * factor, 3.9, jupiterIcon, 176, 400, solarArea],
        ["saturn", 0.033 * factor, 4.6, saturnIcon, 136, 400, solarArea],
        ["uranus", 0.011 * factor, 5.3, uranusIcon, 96, 400, solarArea],
        ["neptune", 0.006 * factor, 6, neptunIcon, 56, 400, solarArea],
    ];
    useEffect(() => {       
        planetDataList.map( item => planetList.push(new planet(...item)) )
        solarArea.start();  
    }, []);
  
    function updateGameArea() {
        solarArea.clear();
        planetList.map(item => {
            item.newPos();
            item.update();
         });
    }

    const changeSpeedFactor = (event) => {
        
        planetList.map((item, index) => {            
            const planetIndex = planetDataList[index];
            const val = Number(event.target.value);  
            item.speed = planetIndex[1] * val;
            item.moveAngle = planetIndex[1] / planetIndex[2] * val;
         });
    }

    const changeBackground = (event) => {
        if (event.target.value === 'classic') {
            canvasContainer.current.style.backgroundImage = `url(${spaceImg})`;
        } else {
            canvasContainer.current.style.backgroundImage = `url(${spaceImg2})`; 
        }
    }
    
    const selectPlanet = (event) => {    
        dispatch({
            type: ACTIONS.SET_CURRENT_PLANET,
            payload: event.target.value 
        });
        for (let i=0; i < planetList.length; i++) {
           if (planetList[i].name === event.target.value){
            planetList[i].width = 45;
            planetList[i].height = 45;
           } else {
            planetList[i].width = 30;
            planetList[i].height = 30; 
           }
        }            
    }

    return useMemo(() => {
        return (
            <div>
                <CanvasContainer ref={ canvasContainer }>
                    <div className="canvas">
                        <Axis size={43}>
                            <Axis size={38}>
                                <Axis size={33}>
                                    <Axis size={28}>
                                        <Axis size={23}>
                                            <Axis size={18}>
                                                <Axis size={13}>
                                                    <Axis size={8}>
                                                        <SunIcon src={ sunIcon }></SunIcon>
                                                    </Axis>
                                                </Axis>
                                            </Axis>
                                        </Axis>
                                    </Axis>
                                </Axis>
                            </Axis>
                        </Axis>                    
                    </div>             
                </CanvasContainer>
    
                <ControlPanel
                    changeSpeedFactor={changeSpeedFactor}
                    fun={changeBackground}
                />

                <PlanetChoice onChange={ selectPlanet } />
            </div> 
        )  
    }, [])
    }

     
    

export default Solar;