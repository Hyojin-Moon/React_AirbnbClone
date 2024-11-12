import React, { useState } from 'react';
import styled from 'styled-components';

interface DateInfo {
  date: Date;
  isCurrentMonth: boolean;
}

interface CalendarProps {
  onChange?: (dates: { startDate: Date; endDate: Date }) => void;
}

interface DateCellProps {
  isCurrentMonth: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isToday: boolean;
}

const CalendarWrapper = styled.div`
  width: 600px;
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 
              0 8px 16px rgb(0 0 0 / 15%);
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const CalendarGrid = styled.div`
  flex: 1;
`;

const MonthHeader = styled.div`
  text-align: center;
  margin-bottom: 16px;
  font-weight: 600;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`;

const WeekdayCell = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #666;
`;

const DateCell = styled.div<DateCellProps>`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.isCurrentMonth ? '#000' : '#ccc'};
  
  ${props => props.isSelected && `
    background: #007bff;
    color: white;
    border-radius: 50%;
  `}
  
  ${props => props.isInRange && `
    background: #e6f0ff;
  `}
  
  ${props => props.isToday && !props.isSelected && `
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: #007bff;
      border-radius: 50%;
    }
  `}

  &:hover {
    background: ${props => props.isSelected ? '#007bff' : '#f0f0f0'};
    border-radius: ${props => props.isSelected ? '50%' : '0'};
  }
`;

const SelectedDates = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #666;
`;

const DualCalendar: React.FC<CalendarProps> = ({ onChange }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const DAYS: string[] = ['일', '월', '화', '수', '목', '금', '토'];
  const MONTHS: string[] = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const generateDates = (baseDate: Date): DateInfo[] => {
    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const daysArray: DateInfo[] = [];

    // Previous month dates
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      daysArray.push({
        date: new Date(prevYear, prevMonth, daysInPrevMonth - i),
        isCurrentMonth: false
      });
    }

    // Current month dates
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }

    // Next month dates
    const remainingDays = 42 - daysArray.length;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    
    for (let i = 1; i <= remainingDays; i++) {
      daysArray.push({
        date: new Date(nextYear, nextMonth, i),
        isCurrentMonth: false
      });
    }

    return daysArray;
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date): boolean => {
    if (!date) return false;
    if (!startDate && !endDate) return false;
    
    return Boolean(
      (startDate && date.getTime() === startDate.getTime()) ||
      (endDate && date.getTime() === endDate.getTime())
    );
  };

  const isInRange = (date: Date): boolean => {
    if (!startDate || (!endDate && !hoverDate)) return false;
    
    const end = endDate || hoverDate;
    if (!end) return false; 
    
    return Boolean(date > startDate && date < end);
  };

  const handleDateClick = (date: Date): void => {
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
      onChange?.({ startDate, endDate: date });
    }
  };

  const handlePrevMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendar = (date: Date) => (
    <CalendarGrid>
      <MonthHeader>
        {MONTHS[date.getMonth()]} {date.getFullYear()}
      </MonthHeader>
      <DaysGrid>
        {DAYS.map(day => (
          <WeekdayCell key={day}>
            {day}
          </WeekdayCell>
        ))}
        {generateDates(date).map((dateInfo, index) => (
          <DateCell
            key={index}
            isCurrentMonth={dateInfo.isCurrentMonth}
            isSelected={isSelected(dateInfo.date)}
            isInRange={isInRange(dateInfo.date)}
            isToday={isToday(dateInfo.date)}
            onClick={() => handleDateClick(dateInfo.date)}
            onMouseEnter={() => !endDate && startDate && setHoverDate(dateInfo.date)}
            onMouseLeave={() => setHoverDate(null)}
          >
            {dateInfo.date.getDate()}
          </DateCell>
        ))}
      </DaysGrid>
    </CalendarGrid>
  );

  const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

  return (
    <CalendarWrapper
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Header>
        <NavigationButton onClick={handlePrevMonth}>&lt;</NavigationButton>
        <NavigationButton onClick={handleNextMonth}>&gt;</NavigationButton>
      </Header>
      <CalendarContainer>
        {renderCalendar(currentDate)}
        {renderCalendar(nextMonthDate)}
      </CalendarContainer>
      {startDate && (
        <SelectedDates>
          {startDate.toLocaleDateString()} 
          {endDate ? ` - ${endDate.toLocaleDateString()}` : ''}
        </SelectedDates>
      )}
    </CalendarWrapper>
  );
};

export default DualCalendar;