/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Radio from './RadioContainer';

const Panel = styled.div`
  width 100%;
  background-color: rgba(134, 124, 153, 0.904);
  height: 5rem;
  color: #d3d3d3;
  display: flex;
  justify-content: space-between
`
const PanelDiv = styled.div`
  width 48%;
  text-align: center;
  padding-top: 0.5rem;
`


const RangeTitle = styled.h3`
  margin: 0;
`

const Range = styled.input`
  width: 90%;
  margin: 1rem;
  -webkit-appearance: none;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #400080;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #400080;
    cursor: pointer;
  }
`



const ControlPanel = ({ changeSpeedFactor, fun }) => {
  return (
    <Panel>
        <PanelDiv>
            <RangeTitle>Rotate speed:</RangeTitle>
            <Range defaultValue="1" type="range" min="0" max="3" onChange={changeSpeedFactor} />
        </PanelDiv>
        <PanelDiv>
            <RangeTitle>Background:</RangeTitle>
            <Radio fun={fun}/>
        </PanelDiv>
    </Panel>    
      
    
  );
}

export default ControlPanel;
