import React from 'react';
import './PopularTimesDay.scss';

function PopularTimesDay ({day, setDay, times}) {

    const prevDayHandler = () => {
        let dayID = times.find(time => time.day === day).id;
        dayID--;
        if (dayID === 0) dayID = 7;
        setDay(times.find(time => time.id === dayID).day);
    }

    const nextDayHandler = () => {
        let dayID = times.find(time => time.day === day).id;
        dayID++;
        if (dayID === 8) dayID = 1;
        setDay(times.find(time => time.id === dayID).day);
    }

    return (
      <div className="popular-times-day">
          <button className="btn-prev-day" onClick={prevDayHandler}>&larr;</button>
          <span>{times.find(time => time.day === day).data}</span>
          <button className="btn-next-day" onClick={nextDayHandler}>&rarr;</button>
      </div>
    );
  }
  
  export default PopularTimesDay;