import { Fade } from 'react-reveal';
import styled from 'styled-components';
import SensorChart from '../components/SensorChart/SensorChart';
import { blue } from '../theme';

const SensorList = () => {
  return (
    <Fade>
      <StyledSensor>
        <div className='sensor-inner-box'>
          <div>
            <SensorChart />
          </div>
        </div>
      </StyledSensor>
    </Fade>
  );
};
export default SensorList;

const StyledSensor = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 20%;
  padding: 10px;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
  background-size: cover;
  .sensor-inner-box {
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
    width: 100%;
    height: 100%;
    margin-left: 0;
    padding: 10px;
    background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
    background-size: cover;
    .sensor-inner-box {
      width: 100%;
      height: 100%;
      padding: 20px;
      border: 3px solid ${blue};
      background-color: #ffffffd5;
    }
  }
`;
