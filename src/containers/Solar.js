/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, {useEffect, useRef} from 'react';
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
    
    let planetMercury;
    let planetVenus;
    let planetEarth;
    let planetMars;
    let planetJupiter;
    let planetSaturn;
    let planetUranus;
    let planetNeptun;
    let solarArea = solarSystemArea(updateGameArea);

    const canvasContainer = useRef(null);
    
    useEffect(() => {
        let factor = 1;
        planetMercury = new planet(4.15 * factor, 1.1, mercuryIcon, 337, 400, solarArea);
        planetVenus = new planet(1.6 * factor, 1.8, venusIcon, 295, 400, solarArea);
        planetEarth = new planet(1 * factor, 2.5, earthIcon, 256, 400, solarArea);
        planetMars = new planet(0.53 * factor, 3.2, marsIcon, 215, 400, solarArea);
        planetJupiter = new planet(0.084 * factor, 3.9, jupiterIcon, 176, 400, solarArea);
        planetSaturn = new planet(0.033 * factor, 4.6, saturnIcon, 136, 400, solarArea);
        planetUranus = new planet(0.011 * factor, 5.3, uranusIcon, 96, 400, solarArea);
        planetNeptun = new planet(0.006 * factor, 6, neptunIcon, 56, 400, solarArea);
        solarArea.start();  
    }, []);
  
    function updateGameArea() {
        solarArea.clear();
        planetMercury.newPos();
        planetMercury.update();
        planetVenus.newPos();
        planetVenus.update();
        planetEarth.newPos();
        planetEarth.update();
        planetMars.newPos();
        planetMars.update();
        planetJupiter.newPos();
        planetJupiter.update();
        planetSaturn.newPos();
        planetSaturn.update();
        planetUranus.newPos();
        planetUranus.update();
        planetNeptun.newPos();
        planetNeptun.update();
    }

    const changeSpeedFactor = (event) => {
        event.defaultValue = event.target.value;
        planetMercury.speed = 4.15 * event.target.value;
        planetMercury.moveAngle = 4.15 / 1.1 * event.target.value;

        planetVenus.speed = 1.6 * event.target.value;
        planetVenus.moveAngle = 1.6 / 1.8 * event.target.value;

        planetEarth.speed = 1 * event.target.value;
        planetEarth.moveAngle = 1 / 2.5 * event.target.value;
        
        planetMars.speed = 0.53 * event.target.value;
        planetMars.moveAngle = 0.53 / 3.2 * event.target.value;
        
        planetJupiter.speed = 0.084 * event.target.value;
        planetJupiter.moveAngle = 0.084 / 3.9 * event.target.value;
        
        planetSaturn.speed = 0.033 * event.target.value;
        planetSaturn.moveAngle = 0.033 / 4.6 * event.target.value;
        
        planetUranus.speed = 0.011 * event.target.value;
        planetUranus.moveAngle = 0.011 / 5.3 * event.target.value;
        
        planetNeptun.speed = 0.006 * event.target.value;
        planetNeptun.moveAngle = 0.006 / 6 * event.target.value;
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