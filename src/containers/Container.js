/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Solar from './Solar';

const Main = styled.div`
  width: 868px;
  margin: 0 auto;
  background-color: rgba(81, 66, 97, 0.904);
  border: 2px rgba(46, 46, 46, 0.5) solid;
  padding: 2rem;
`

const Container = () => {
  return (    
    <Main>
        <Solar />
    </Main>
  );
}

export default Container;
