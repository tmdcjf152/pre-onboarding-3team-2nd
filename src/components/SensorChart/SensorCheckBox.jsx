import styled from 'styled-components';
import { useContext } from 'react';
import { blue, pearl } from '../../theme';
import { CheckboxContext } from '../../App';

const SensorCheckBox = () => {
  const { checkedArray, setCheckedArray } = useContext(CheckboxContext);

  const radioHandler = (type, checkEl) => {
    const condition = {
      [type]: checkEl.currentTarget.value,
    };
    if (checkEl.currentTarget.checked) {
      setCheckedArray({ ...checkedArray, ...condition });
    } else if (!checkEl.currentTarget.checked && Object.keys(checkedArray).includes(type)) {
      let test = checkedArray;
      delete test[type];
      setCheckedArray(test);
    } else if (!checkEl.currentTarget.checked && !Object.keys(checkedArray).includes(type)) {
      return;
    }
  };

  const resetHandler = event => {
    setCheckedArray({});
    event.target.reset();
  };

  return (
    <SensorCheckBoxBlock>
      <div>
        <div className='scroll'>
          <div className='margined'>
            <span>Sensor ID</span>
            <div className='InputBox'>
              <label>
                <input name='thingName' type='radio' value='all' onChange={checkEl => radioHandler('thingName', checkEl)} defaultChecked />
                <span>전체</span>
              </label>
              <label>
                <input name='thingName' type='radio' value='FHL' onChange={checkEl => radioHandler('thingName', checkEl)} />
                <span>FHL</span>
              </label>
              <label>
                <input name='thingName' type='radio' value='FHS' onChange={checkEl => radioHandler('thingName', checkEl)} />
                <span>FHS</span>
              </label>
            </div>
          </div>
          <div className='margined'>
            <span>Bat.(%)</span>
            <div className='InputBox'>
              <label>
                <input name='batLvl' type='radio' value='all' onChange={checkEl => radioHandler('batLvl', checkEl)} defaultChecked />
                <span>전체</span>
              </label>
              <label>
                <input name='batLvl' type='radio' value='up' onChange={checkEl => radioHandler('batLvl', checkEl)} />
                <span>20% 초과</span>
              </label>
              <label>
                <input name='batLvl' type='radio' value='down' onChange={checkEl => radioHandler('batLvl', checkEl)} />
                <span>20% 이하</span>
              </label>
            </div>
          </div>
          <div className='margined'>
            <span>Connection State</span>
            <div className='InputBox'>
              <label>
                <input name='ConnectionState' type='radio' value='all' onChange={checkEl => radioHandler('ConnectionState', checkEl)} defaultChecked />
                <span>전체</span>
              </label>
              <label>
                <input name='ConnectionState' type='radio' value='connect' onChange={checkEl => radioHandler('ConnectionState', checkEl)} />
                <span>연결중</span>
              </label>
              <label>
                <input name='ConnectionState' type='radio' value='disconnect' onChange={checkEl => radioHandler('ConnectionState', checkEl)} />
                <span>연결해제됨</span>
              </label>
            </div>
          </div>
          <div className='margined'>
            <span>Card No.</span>
            <div className='InputBox'>
              <label>
                <input name='connCardNum' type='radio' value='all' onChange={checkEl => radioHandler('connCardNum', checkEl)} defaultChecked />
                <span>전체</span>
              </label>
              <label>
                <input name='connCardNum' type='radio' value='1' onChange={checkEl => radioHandler('connCardNum', checkEl)} />
                <span>1</span>
              </label>
              <label>
                <input name='connCardNum' type='radio' value='0' onChange={checkEl => radioHandler('connCardNum', checkEl)} />
                <span>0</span>
              </label>
            </div>
          </div>
          <div className='margined'>
            <span>Remain</span>
            <div className='InputBox'>
              <label>
                <input name='remainData' type='radio' value='all' onChange={checkEl => radioHandler('remainData', checkEl)} defaultChecked />
                <span>전체</span>
              </label>
              <label>
                <input name='remainData' type='radio' value='up' onChange={checkEl => radioHandler('remainData', checkEl)} />
                <span>1000 이상</span>
              </label>
            </div>
          </div>
          <div className='margined'>
            <span>F/W ver.</span>
            <div className='InputBox'>
              <label>
                <input name='fwVer' type='radio' value='all' onChange={checkEl => radioHandler('fwVer', checkEl)} defaultChecked />
                <span>전체</span>
              </label>
              <label>
                <input name='fwVer' type='radio' value='1.0.0' onChange={checkEl => radioHandler('fwVer', checkEl)} />
                <span>1.0.0</span>
              </label>
              <label>
                <input name='fwVer' type='radio' value='0.8.2' onChange={checkEl => radioHandler('fwVer', checkEl)} />
                <span>0.8.2</span>
              </label>
            </div>
          </div>
          <div className='margined'>
            <span>H/W ver.</span>
            <div className='InputBox'>
              <label>
                <input name='hwVer' type='radio' value='all' onChange={checkEl => radioHandler('hwVer', checkEl)} defaultChecked />
                <span>전체</span>
              </label>
              <label>
                <input name='hwVer' type='radio' value='1.0.0' onChange={checkEl => radioHandler('hwVer', checkEl)} />
                <span>1.0.0</span>
              </label>
              <label>
                <input name='hwVer' type='radio' value='0.2.0' onChange={checkEl => radioHandler('hwVer', checkEl)} />
                <span>0.2.0</span>
              </label>
            </div>
          </div>
          <button
            onClick={() => {
              setCheckedArray({});
              location.reload();
            }}
          >
            <span>reset</span>
          </button>
        </div>
      </div>
    </SensorCheckBoxBlock>
  );
};

const SensorCheckBoxBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${blue};
  border-bottom: 1px solid ${blue};
  color: ${blue};
  position: relative;
  z-index: 2;
  .margined {
    margin-bottom: 15px;
  }
  .InputBox {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    [type='radio'] {
      vertical-align: middle;
      appearance: none;
      border: max(2px, 0.1em) solid ${blue};
      border-radius: 50%;
      width: 1.3em;
      height: 1.3em;
    }
    [type='radio']:checked {
      border: 0.4em solid ${blue};
    }
    span {
      margin-right: 0.5em;
    }
  }
  .scroll {
    margin: 1.5vh 0 1.5vh 0;
  }
  label {
    display: flex;
    align-items: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80px;
    height: 30px;
    margin-top: 50px;
    background: ${blue};
    border-radius: 50px;
    border: none;
    font: bold 20px/1 'Pacifico';
    color: ${pearl};
    cursor: pointer;
  }

  /* ============= ======= 1400px ============ ======== */
  @media screen and (max-width: 1400px) {
    overflow: scroll;
    .InputBox {
      font-size: 0.58em;
      [type='radio'] {
        vertical-align: middle;
        appearance: none;
        border: max(2px, 0.1em) solid ${blue};
        border-radius: 50%;
        width: 1em;
        height: 1em;
      }
    }
    .scroll {
      height: 450px;
    }
  }

  /* ============= ======= 1024px ============ ======== */
  @media screen and (max-width: 890px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${blue};
    border-bottom: 1px solid ${blue};
    color: ${pearl};
    .margined {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 180px;
      height: 100px;
      margin-bottom: 15px;
    }
    .InputBox {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      [type='radio'] {
        vertical-align: middle;
        appearance: none;
        border: max(2px, 0.1em) solid ${pearl};
        border-radius: 50%;
        width: 1.3em;
        height: 1.3em;
      }
      [type='radio']:checked {
        border: 0.4em solid ${pearl};
      }
      span {
        margin-right: 0.5em;
      }
    }
    .scroll {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
    }
    label {
      display: flex;
      align-items: center;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      height: 30px;
      background: ${blue};
      border-radius: 50px;
      border: none;
      font: bold 20px/1 'Pacifico';
      color: ${pearl};
      cursor: pointer;
    }
  }
`;

export default SensorCheckBox;
