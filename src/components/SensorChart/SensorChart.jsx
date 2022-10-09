import styled from 'styled-components';
import axios from 'axios';
import { Fade } from 'react-reveal';
import { useEffect, useState, useContext } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { header } from '../../assets/sensor/header';
import ChartRow from './ChartRow';
import { CheckboxContext } from '../../App';

const SensorChart = () => {
  const [chartData, setChartData] = useState([]);
  const [optionCheck, setOptionCheck] = useState('');
  const [ascending, setAscending] = useState(true);

  // 실제 보여주는 데이터
  const [displayData, setDisplayData] = useState([]);

  // 체크박스 조건 배열
  const checkboxCondition = ['connCardNum', 'fwVer', 'hwVer'];

  const { checkedArray, setCheckedArray } = useContext(CheckboxContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('./data/sensorInfoList.json');
        setChartData(data);
        // 실제 보여주는 데이터에도 data 추가
        setDisplayData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // 체크박스 필터 - 시작
  useEffect(() => {
    let test = [];
    for (const sensorList of chartData) {
      let checkboxConditionState = true;
      let sensorListStateArray = Object.keys(checkedArray);
      if (sensorListStateArray.includes('thingName')) {
        if (!sensorList.thingName.includes(checkedArray.thingName) && checkedArray.thingName !== 'all') {
          continue;
        }
      }

      if (sensorListStateArray.includes('batLvl')) {
        if (checkedArray.batLvl === 'up') {
          if (sensorList.shadow.batLvl <= 20) {
            continue;
          }
        } else if (checkedArray.batLvl === 'down') {
          if (sensorList.shadow.batLvl > 20) {
            continue;
          }
        }
      }

      if (sensorListStateArray.includes('ConnectionState')) {
        if (checkedArray.ConnectionState === 'connect') {
          if (!sensorList.shadow.connectedGateway) {
            continue;
          }
        } else if (checkedArray.ConnectionState === 'disconnect') {
          if (sensorList.shadow.connectedGateway) {
            continue;
          }
        }
      }

      if (sensorListStateArray.includes('remainData')) {
        if (checkedArray.remainData === 'up') {
          if (sensorList.shadow.remainData < 1000) {
            continue;
          }
        }
      }

      checkboxCondition.some(condition => {
        if (sensorListStateArray.includes(condition)) {
          if (!String(sensorList.shadow[condition]).includes(checkedArray[condition]) && checkedArray[condition] !== 'all') {
            checkboxConditionState = false;
            return true;
          }
        }
      });
      if (checkboxConditionState) {
        test.push(sensorList);
      } else {
        continue;
      }
    }
    setDisplayData(test);
  }, [optionCheck, checkedArray]);
  // 체크박스 필터 - 끝

  useEffect(() => {
    if (optionCheck === 'thingName') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.thingName.split('-')[1] - b.thingName.split('-')[1]));
      } else {
        setChartData(chartData.sort((a, b) => b.thingName.split('-')[1] - a.thingName.split('-')[1]));
      }
    } else if (optionCheck === 'batLvl') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.batLvl - b.shadow.batLvl));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.batLvl - a.shadow.batLvl));
      }
    } else if (optionCheck === 'connCardNum') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.connCardNum - b.shadow.connCardNum));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.connCardNum - a.shadow.connCardNum));
      }
    } else if (optionCheck === 'connGW') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.connGW.split('-')[1] - b.shadow.connGW.split('-')[1]));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.connGW.split('-')[1] - a.shadow.connGW.split('-')[1]));
      }
    } else if (optionCheck === 'rawSentCnt') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.rawSentCnt - b.shadow.rawSentCnt));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.rawSentCnt - a.shadow.rawSentCnt));
      }
    } else if (optionCheck === 'remainData') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.remainData - b.shadow.remainData));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.remainData - a.shadow.remainData));
      }
    } else if (optionCheck === 'rssi') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.rssi - b.shadow.rssi));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.rssi - a.shadow.rssi));
      }
    }
  }, [optionCheck, checkedArray]);

  return (
    <SensorChartBlock>
      <Fade top cascade>
        <table>
          <thead className='fixed'>
            <tr>
              {header.map((category, index) => {
                return (
                  <td className='headline' key={`${category.id + index}`} onClick={() => setOptionCheck(category.id)}>
                    <span>{category.name}</span>
                    {category.sort ? '' : <BsFillTriangleFill />}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {displayData.map((sensorList, index) => {
              return <ChartRow key={`${sensorList.thingName + index}`} chartdata={sensorList} index={index} />;
            })}
          </tbody>
        </table>
      </Fade>
    </SensorChartBlock>
  );
};

export default SensorChart;

const SensorChartBlock = styled.div`
  // 스크롤 추가 - 시작
  height: 100%;
  width: 100%;
  overflow: scroll;
  // 스크롤 추가 - 끝
  table {
    width: 100%;
  }
  td {
    text-align: center;
  }
  .fixed {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 30px;
    overflow: hidden;
    line-height: 30px;
    background-color: #ffffff;
    .headline {
      font-size: 8px;
      span {
        margin-right: 5px;
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 1875px) {
    height: 700px;
  }
`;
