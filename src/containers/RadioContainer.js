/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Radio from '../components/Radio';


const PanelContent = styled.div`
    width 85%;
    display: flex;
    text-align: center;
    font-size: 22px;
    justify-content: space-between;
    margin: 0.5rem 1.4rem 0 auto;
`

const RadioContainer = ({fun}) => {
  return (
        <PanelContent>
            <Radio
                name="background"
                label="Classic"
                value="classic"
                onChange={fun}
                defaultChecked
            />
            <Radio
                name="background" 
                label="Milky way"
                value="milkyWay"
                onChange={fun}
            />
        </PanelContent>
  );
}

export default RadioContainer;
