import styled from 'styled-components';
import { blue, pearl } from '../theme';

const SensorList = () => {
  return (
    <StyledSensor>
      <span  >SensorList</span>
    </StyledSensor>
  );
};
export default SensorList;

const StyledSensor = styled.div`
  width: 80%;
  height: 100vh;
  margin-left: 20%;
  padding: 10px;
  color: ${blue};




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
