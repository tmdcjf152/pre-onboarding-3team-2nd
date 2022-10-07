import styled from 'styled-components';
import { blue } from '../theme';

const SensorList = () => {
  return (
    <StyledSensor>
      <span>SensorList</span>
    </StyledSensor>
  );
};
export default SensorList;

const StyledSensor = styled.div`
  color: ${blue};
`;
