import styled from 'styled-components';
import { blue, pearl } from '../../theme';
import { AiOutlineMenu } from 'react-icons/ai';

// #7B9ACC (파란색)
// #FCF6F5 (진주색)

const Nav = () => {
  return (
    <NavBlock>
      {/* 로고영역박스 */}
      <div className='header-inner-box'>
        <div className='header-logo-box'>
          <h1 className='logo-title'>BoDit!</h1>
        </div>

        {/* 로고밑콘텐츠영역 */}
        <div className='header-content-inner-box'>
          {/* 캘린더 */}
          <div className='calendar-inner-box'>
            <div className='calender-btn'>
              <span>2022년 10월 8일</span>
            </div>
          </div>

          {/* Export */}
          <span className='export-btn'>EXPROT</span>
        </div>
      </div>
    </NavBlock>
  );
};

export default Nav;
const NavBlock = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  position: relative;

  .header-inner-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100vh;
    /* 로고영역박스 */
    .header-logo-box {
      width: 100%;
      height: 150px;
      .logo-title {
        display: flex;
        justify-content: center;
        padding-top: 50px;
        font: bold 50px/1 'Pacifico';
        color: ${blue};
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
        margin-bottom: 465px;
        .calender-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          font: 25px/1 'apple';
          color: ${blue};
        }
      }
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
    }
  }

  @media screen and (max-width: 1024px) {
    .header-inner-box {
      /* 로고영역박스 */
      .header-logo-box {
        .logo-title {
          font: bold 40px/1 'Pacifico';
        }
      }

      /* 로고밑콘텐츠영역 */
      .header-content-inner-box {
        /* 캘린더박스 */
        .calendar-inner-box {
          margin-bottom: 590px;
          .calender-btn {
            font: 22px/1 'apple';
          }
        }
        .export-btn {
          position: absolute;
          bottom: 50px;
          width: 150px;
          height: 40px;
          font: bold 20px/1 'Pacifico';
        }
      }
    }
  }
  @media screen and (max-width: 890px) {
    .header-inner-box {
      position: unset;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
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
      }
      /* 로고밑콘텐츠영역 */
      .header-content-inner-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: ${blue};
        /* 캘린더박스 */
        .calendar-inner-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          margin-top: 35px;
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
        .export-btn {
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          background: ${pearl};
          border-radius: 50px;
          font: bold 25px/1 'Pacifico';
          color: ${blue};
          transition: all 0.5s;
          cursor: pointer;
          &:hover {
            border: 2px solid ${pearl};
            background: ${blue};
            color: ${pearl};
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 378px) {
  }
`;
