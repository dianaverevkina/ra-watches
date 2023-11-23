import React, { useEffect, useState } from 'react'

export const WatchesItem = ({ watches, deleteClock }) => {
  const { name, timeZone, id } = watches;

  const getCurrentTime = () => {
    const date = new Date();
    date.setUTCHours(date.getUTCHours() + (+timeZone));
    const time = {
      hours: (date.getUTCHours() % 12) * 30 + date.getUTCMinutes() * 0.5,
      minutes: date.getUTCMinutes() * 6,
      seconds: date.getUTCSeconds() * 6,
    }
    return time;
  };

  const [ clock, setClock ] = useState(getCurrentTime);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(getCurrentTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <li className='watches'>
      <h2 className="watches__city">{name}</h2>
      <div className="watches__wrapper">
        <div className="watches__circle">
          <span className="watches__arrow-hour" style={{transform: `rotateZ(${clock.hours}deg)`}}></span>
          <span className="watches__arrow-min" style={{transform: `rotateZ(${clock.minutes}deg)`}}></span>
          <span className="watches__arrow-sec" style={{transform:`rotateZ(${clock.seconds}deg)`}}></span>
        </div>
        <button type='button' onClick={() => deleteClock(id)} className="watches__btn btn-delete">
            <img src="/images/cross.jpg" alt="" />
          </button>
      </div>
    </li>
  )
}
