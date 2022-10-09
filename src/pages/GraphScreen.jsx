import { Fade } from 'react-reveal';
import styled from 'styled-components';
import GraphField from '../components/GraphField/GraphField';

const GraphScreen = () => {
  return (
    <>
      <Fade>
        <StyledGraphScreen>
          <GraphField />
        </StyledGraphScreen>
      </Fade>
    </>
  );
};
export default GraphScreen;

const StyledGraphScreen = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 20%;
  padding: 10px;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
  background-size: cover;

  /* ============= ======= 1024px ============ ======== */
  @media screen and (max-width: 1024px) {
  }

  /* ============= ======= 890px ============ ======== */
  @media screen and (max-width: 890px) {
    width: 100%;
    margin-left: 0;
  }
`;
