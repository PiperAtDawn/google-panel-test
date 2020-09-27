import React from 'react';
import PopularTimesDay from './PopularTimesDay'
import './PopularTimes.scss'

function PopularTimes ({day, setDay, times}) {

    const dayChanger = (e) => {
        setDay(e.target.value);
    };

    return (
      <div className="popular-times">
          <div className="top-half">
            <h2>Popular times</h2>
            <select onChange={dayChanger} name="days" className="days-selector" value={day}>
                <option value="monday">Mondays</option>
                <option value="tuesday">Tuesdays</option>
                <option value="wednsday">Wednsdays</option>
                <option value="thursday">Thursdays</option>
                <option value="friday">Fridays</option>
                <option value="saturday">Saturdays</option>
                <option value="sunday">Sundays</option>
            </select>
          </div>
          <hr/>
          <PopularTimesDay day={day} setDay={setDay} times={times}/>
      </div>
    );
  }
  
  export default PopularTimes;