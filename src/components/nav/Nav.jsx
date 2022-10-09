import { useState } from 'react';
import { Fade } from 'react-reveal';
import { CSVLink } from 'react-csv';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { blue, pearl } from '../../theme';
import Calendar from '../Calender/Calendar';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import SensorCheckBox from '../SensorChart/SensorCheckBox';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const [fileName, setFileName] = useState('');
  const [fileHeader, setFileHeader] = useState([]);
  const [fileData, setFileData] = useState([]);

  const makeCsv = () => {
    const graphFeeds = JSON.parse(localStorage.getItem('graphFeeds'));
    let csvData = [];

    if (!!graphFeeds.length) {
      const csvName = `Bodit_${graphFeeds[0].created_at.substring(0, 10)}`;
      const csvHeader = [
        { label: 'Date', key: 'date' },
        { label: 'Temperature (°C)', key: 'temp' },
        { label: 'Humidity (%)', key: 'humidity' },
        { label: 'Pressure (hPa)', key: 'pressure' },
      ];
      graphFeeds.map(feed => {
        csvData.push({ date: feed.created_at, temp: feed.field1, humidity: feed.field2, pressure: feed.field3 });

        setFileName(csvName);
        setFileHeader(csvHeader);
        setFileData(csvData);
      });
    } else {
      alert('데이터가 없습니다.');
      setFileName('');
      setFileHeader('');
      setFileData('');
    }
  };

  return (
    <NavBlock>
      <Fade>
        {/* 로고영역박스 */}
        <div className='header-inner-box'>
          <div className='header-logo-box'>
            <h1 className='logo-title'>BoDit!</h1>
            <span className='mb-menu-btn'>
              <AiOutlineMenu
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </span>
          </div>
          {/* 로고밑콘텐츠영역 */}
          <div className='header-content-inner-box'>
            {/* 이동메뉴 */}
            <ul className='menu-list-box'>
              <li>
                <NavLink to='/'>SensorList</NavLink>
              </li>
              <li>
                <NavLink to='/graph/target'>GraphScreen</NavLink>
              </li>
            </ul>

            {/* 모바일 이동메뉴 */}
            <ul className={toggle == true ? 'mb-menu-list-box-on' : 'mb-menu-list-box'}>
              <div className='header-logo-box'>
                <h1 className='logo-title'>BoDit!</h1>
                <span className='close'>
                  <AiOutlineClose
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  />
                </span>
              </div>
              <li>
                <NavLink
                  to='/'
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  SensorList
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/graph/target'
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  GrphScreen
                </NavLink>
              </li>
            </ul>

            {/* 체크박스 */}
            {location.pathname !== '/graph/target' && (
              <div className='fillter-inner-box'>
                <SensorCheckBox />
              </div>
            )}

            {/* 캘린더 */}
            <div className='calendar-inner-box'>
              {location.pathname === '/graph/target' && (
                <div className='calender-btn'>
                  <Calendar />
                </div>
              )}
            </div>

            {/* Export */}
            {location.pathname === '/graph/target' && (
              <div className='export-btn-box'>
                <CSVLink className='export-btn' onClick={makeCsv} filename={fileName} headers={fileHeader} data={fileData}>
                  EXPORT
                </CSVLink>
                <p>
                  원하는 날짜와 시간대를 설정 후<br />
                  <span style={{ color: '#ff6363' }}>"EXPORT"</span>를 클릭하세요.
                  <br />
                  csv 파일을 다운로드 합니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </NavBlock>
  );
};

export default Nav;
const NavBlock = styled.header`
  position: relative;
  z-index: 10;

  .header-inner-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    z-index: 10;

    /* 로고영역박스 */
    .header-logo-box {
      width: 100%;
      /* 취소버튼 */
      .close {
        display: none;
        position: absolute;
        top: 50px;
        right: 50px;
        font-size: 30px;
        cursor: pointer;
      }
      /* 로고 */
      .logo-title {
        display: flex;
        justify-content: center;
        padding-top: 50px;
        font: bold 50px/1 'Pacifico';
        color: ${blue};
      }
      /* 반응형 메뉴 햄버거버튼 */
      .mb-menu-btn {
        display: none;
        position: absolute;
        top: 50px;
        right: 50px;
        font-size: 30px;
        cursor: pointer;
      }
    }
    /* 로고밑콘텐츠영역 */
    .header-content-inner-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      margin-top: 30px;
      /* 캘린더박스 */
      .calendar-inner-box {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 10%;
        padding: 20px 0px;
        .calender-btn {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          font: 25px/1 'apple';
          color: ${blue};
        }
      }
      /* 메뉴리스트박스 */
      .menu-list-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 15%;
        margin: 20px 0px;
        li {
          width: 100%;
          margin-bottom: 10px;
          transition: all 0.5s;
          &:hover {
            background: ${blue};
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            font: 30px/1 'apple';
            color: ${blue};
            transition: all 0.5s;
            &:hover {
              color: ${pearl};
            }
          }
        }
      }
      /* 모바일 메뉴리스트박스 */
      .mb-menu-list-box {
        display: block;
        position: absolute;
        top: -1000px;
        right: 0%;
        width: 100%;
        height: 100vh;
        background-color: #ffffffe4;
        transition: all 1s;
        opacity: 0;
        .close {
          position: absolute;
        }
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          transition: all 0.5s;
          &:hover {
            background: #fff;
          }
          a {
            font: bold 25px/1 'apple';
          }
        }
      }
      /* 모바일  메뉴리스트박스  */
      .mb-menu-list-box-on {
        position: absolute;
        top: 0;
        right: 0%;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        z-index: 3;
        transition: all 1s;
        .close {
          position: absolute;
        }
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          transition: all 0.5s;
          &:hover {
            background: #fff;
          }
          a {
            font: bold 25px/1 'apple';
            color: #ddd;
            transition: all 0.5s;
            &:hover {
              color: ${blue};
            }
          }
        }
      }

      /* 필터박스 */
      .fillter-inner-box {
        width: 90%;
        height: 450px;
        border: 1px solid ${blue};
      }

      /* 익스폴트 버튼 */
      .export-btn-box {
        position: absolute;
        bottom: 50px;
        left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 20px 0px;
        .export-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          background: ${blue};
          border-radius: 50px;
          font: bold 25px/1 'Pacifico';
          color: ${pearl};
          cursor: pointer;
        }
        p {
          margin: 10px 0;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          color: ${blue};
        }
      }
    }
  }

  /* ============= ======= 1024px ============ ======== */
  @media screen and (max-width: 1024px) {
    .header-inner-box {
      /* 로고영역박스 */
      .header-logo-box {
        /* 로고글씨 */
        .logo-title {
          font: bold 40px/1 'Pacifico';
        }
      }
      /* 로고밑콘텐츠영역 */
      .header-content-inner-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        /* 캘린더박스 */
        .calendar-inner-box {
          width: 100%;
          height: 10%;
          /* 캘린더  */
          .calender-btn {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            height: 100%;
            font: 20px/1 'apple';
            color: ${blue};
          }
        }

        /* export 박스 */
        .export-btn-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          /* export 버튼 */
          .export-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 40px;
            background: ${blue};
            border-radius: 50px;
            font: bold 18px/1 'Pacifico';
            color: ${pearl};
            cursor: pointer;
          }
        }
      }
    }
  }
  /* ============= ======= 890px ============ ======== */
  @media screen and (max-width: 890px) {
    .header-inner-box {
      position: unset;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* 로고영역박스 */
      .header-logo-box {
        width: 100%;
        height: 150px;
        .logo-title {
          display: flex;
          justify-content: center;
          padding-top: 50px;
          font: bold 50px/1 'Pacifico';
        }

        .close {
          display: block;
          position: absolute;
          top: 50px;
          right: 50px;
          font-size: 30px;
          cursor: pointer;
        }
        .mb-menu-btn {
          display: block;
          position: absolute;
          top: 50px;
          right: 50px;
          font-size: 30px;
          cursor: pointer;
          z-index: 1;
        }
      }

      /* 로고밑콘텐츠영역 */
      .header-content-inner-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: ${blue};
        /* 캘린더박스 */
        .calendar-inner-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          margin-top: 35px 0px 50px 0px;
          .calender-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font: 25px/1 'apple';
            color: ${pearl};
          }
        }

        /* 메뉴리스트박스 */
        .menu-list-box {
          display: none;

          li {
            display: none;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            transition: all 0.5s;
            &:hover {
              background: ${blue};
            }
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 50px;
              font: 30px/1 'apple';
              color: ${blue};
              transition: all 0.5s;
              c &:hover {
                color: ${pearl};
              }
            }
          }
        }

        /* 필터박스 */
        .fillter-inner-box {
          width: 100%;
          height: 100%;
          border: 1px solid ${blue};
        }

        .export-btn-box {
          position: initial;
          top: 0;
          left: 0%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .export-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 50px;
            background: ${pearl};
            border-radius: 50px;
            font: bold 25px/1 'Pacifico';
            color: ${blue};
            cursor: pointer;
          }
          p {
            color: ${pearl};
          }
        }
      }
    }
  }
`;
