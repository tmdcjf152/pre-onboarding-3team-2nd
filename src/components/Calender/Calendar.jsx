import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarBlue from '../../assets/img/calendar/calendarBlue.png';
import { blue, pearl } from '../../theme';

const Calendar = () => {
  const navigate = useNavigate();
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const [date, setDate] = useState(yesterday);

  useEffect(() => {
    navigate('/graph/target?' + calendarQuery(date));
  }, [date]);

  const calendarQuery = tagetDate => {
    const year = tagetDate.getFullYear();
    const month = ('0' + (tagetDate.getMonth() + 1)).slice(-2);
    const day = ('0' + tagetDate.getDate()).slice(-2);
    const dateString = year + '-' + month + '-' + day;

    const startQuery = `start=${dateString}%2000:00:00`;
    const endQuery = `end=${dateString}%2023:59:59`;

    return startQuery + '&' + endQuery;
  };

  return (
    <CalendarBlock>
      <img className='calendar-icon' src={calendarBlue} />
      <DatePicker shouldCloseOnSelect={false} maxDate={yesterday} className='container' dateFormat='yyyy/MM/dd' dateFormatCalendar='yyyy년 M월' selected={date} onChange={date => setDate(date)} />
    </CalendarBlock>
  );
};

export default Calendar;

const CalendarBlock = styled.div`
  display: flex;
  width: 70%;
  padding: 3px;
  background-color: transparent;
  border: 1px solid ${blue};
  border-radius: 5px;

  .calendar-icon {
    width: 30px;
  }
  .container {
    width: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
    background-color: transparent;
    color: ${blue};
    font-weight: 600;
  }
  .react-datepicker {
    border: 2px solid ${blue};
    border-radius: 5px;
    box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;
    inset: -196px auto auto -20px;
    transform: translate3d(-29px, 196.5px, 0px);
  }
  .react-datepicker__navigation-icon::before {
    border-color: ${blue};
  }
  .react-datepicker__triangle {
    display: none;
  }
  .container react-datepicker-ignore-onclickoutside {
    border: none;
  }
  *:focus {
    outline: 0;
  }
  .react-datepicker__day-name {
    color: ${blue};
    font-weight: 700;
  }
  .react-datepicker__current-month {
    color: ${blue};
    font-size: 18px;
  }
  .react-datepicker__header {
    background-color: #ffffff;
    border-bottom: none;
  }
  .react-datepicker__day--selected {
    color: #ffffff;
    background-color: ${blue};
  }
  .react-datepicker__day--keyboard-selected {
    color: #ffffff;
    background-color: ${blue};
  }
  @media screen and (max-width: 890px) {
    display: flex;
    width: 70%;
    padding: 3px;
    background-color: transparent;
    border: 1px solid ${pearl};
    border-radius: 5px;
    .container {
      width: 100%;
      border: none;
      text-align: center;
      font-size: 20px;
      background-color: transparent;
      color: ${pearl};
      font-weight: 600;
    }
    .calendar-icon {
      width: 30px;
      padding: 3px;
      filter: brightness(0) invert(1);
    }
  } ;
`;
