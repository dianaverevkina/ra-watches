import { WatchesContainer } from "./WatchesContainer/WatchesContainer";
import { WatchesForm } from "./WatchesForm/WatchesForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export const WatchesWidget = () => {
  const initialWatches = {name: '', timeZone: '', id: ''};
  const [ watches, setWatches ] = useState(initialWatches);
  const [ watchesList, setWatchesList ] = useState([]);
  const [ isValid, setValidity] = useState(false);

  const numberRegex = /^[+-]?\d{1,2}$/;

  function handleChange(e) {
    const { value, name } = e.target;

    if (name === 'timeZone') {
      numberRegex.test(value) ? setValidity(true) : setValidity(false);
    }

    setWatches({...watches, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setWatchesList([{ ...watches, id: uuidv4() }, ...watchesList]);
  }

  function handleDeleteClock(clockId) {
    const filteredList = watchesList.filter(clock => clock.id !== clockId);
    setWatchesList(filteredList);
  }

  return (
    <>
      <WatchesForm 
        watches={watches} 
        onChange={handleChange} 
        isValid={isValid}
        onSubmit={handleSubmit}
      />
      <WatchesContainer watchesList={watchesList} deleteClock={handleDeleteClock} />
    </>
  )
}
