/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {useEffect, useRef} from 'react';
import solarSystemArea from '../canvas/solarSystemArea';
import planet from '../canvas/planet';
import ControlPanel from './ControlPanel';

// images
import spaceImg from '../assets/space.jpg';
import spaceImg2 from '../assets/space2.jpg';
import sunIcon from '../assets/planets/sun.png';
import mercuryIcon from '../assets/planets/mercury.png';
import venusIcon from '../assets/planets/venus.png';
import earthIcon from '../assets/planets/earth.png';
import marsIcon from '../assets/planets/mars.png';
import jupiterIcon from '../assets/planets/jupiter.png';
import saturnIcon from '../assets/planets/saturn.png';
import uranusIcon from '../assets/planets/uranus.png';
import neptunIcon from '../assets/planets/neptun.png';


const CanvasContainer = styled.div`
  width: 100%;
  background-image: url(${spaceImg});
  background-size: cover;
  position: relative;
  z-index: 2;
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

    let solarArea = solarSystemArea(updateGameArea);

    const canvasContainer = useRef(null);

    const planetList = []
    let factor = 1;
    
    const planetDataList = [
        [4.15 * factor, 1.1, mercuryIcon, 337, 400, solarArea],
        [1.6 * factor, 1.8, venusIcon, 295, 400, solarArea],
        [1 * factor, 2.5, earthIcon, 256, 400, solarArea],
        [0.53 * factor, 3.2, marsIcon, 215, 400, solarArea],
        [0.084 * factor, 3.9, jupiterIcon, 176, 400, solarArea],
        [0.033 * factor, 4.6, saturnIcon, 136, 400, solarArea],
        [0.011 * factor, 5.3, uranusIcon, 96, 400, solarArea],
        [0.006 * factor, 6, neptunIcon, 56, 400, solarArea],
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
            const val = event.target.value;
            item.speed = planetIndex[0] * val;
            item.moveAngle = planetIndex[0] / planetIndex[1] * val;
         });
    }

    const changeBackground = (event) => {
        if (event.target.value === 'classic') {
            canvasContainer.current.style.backgroundImage = `url(${spaceImg})`;
        } else {
            canvasContainer.current.style.backgroundImage = `url(${spaceImg2})`; 
        }
    }
     
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
        </div> 
    )  
}

export default Solar;