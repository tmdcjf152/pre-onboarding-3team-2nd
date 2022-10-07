import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import { blue, pearl } from '../theme';


const GraphScreen = () => {
  return (
    <>
      <StyledGraphScreen>
        <div className='graph-inner-box'>
          <span>GraphScreend</span>
        </div>
      </StyledGraphScreen>
    </>
  );
};
export default GraphScreen;

const StyledGraphScreen = styled.div`
  width: 80%;
  height: 100vh;
  margin-left: 20%;
  padding: 10px;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
  .graph-inner-box {
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 3px solid ${blue};
    background-color: #ffffffd5;
  }

  /* ============= ======= 1024px ============ ======== */
  @media screen and (max-width: 1024px) {
  }

  /* ============= ======= 890px ============ ======== */
  @media screen and (max-width: 890px) {
    margin-left: 0;
    margin-top: 250px;
  }

  /* ============= ======= 480px ============ ======== */
  @media screen and (max-width: 480px) {
  }

  /* ============= ======= 378px ============ ======== */
  @media screen and (max-width: 378px) {
  }
`;
