/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, {useEffect} from 'react';
import solarSystemArea from '../canvas/solarSystemArea';
import planet from '../canvas/planet';
import spaceImg from '../assets/space.jpg';
import sunIcon from '../assets/planets/sun.png';
import mercuryIcon from '../assets/planets/mercury.png';
import venusIcon from '../assets/planets/venus.png';
import earthIcon from '../assets/planets/earth.png';


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
const Button = styled.button`
  color: ;
`

const Solar = () => {
    
    let planetIns;
    let planetIns2;
    let planetIns3;
    let solarArea = solarSystemArea(updateGameArea);
    
    useEffect(() => {
        planetIns = new planet(0, 1.4, mercuryIcon, 420, 300, solarArea);
        planetIns2 = new planet(0, 2.1, venusIcon, 380, 300, solarArea);
        planetIns3 = new planet(1, 2.8, earthIcon, 340, 300, solarArea);
        solarArea.start();  
    }, []);
  
    function updateGameArea() {
        solarArea.clear();
        planetIns.newPos();
        planetIns.update();
        planetIns2.newPos();
        planetIns2.update();
        planetIns3.newPos();
        planetIns3.update();
    }
     
    return (
        <CanvasContainer>
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
    )  
}

export default Solar;