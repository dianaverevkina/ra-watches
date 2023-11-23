import React from 'react'

export const WatchesForm = ({ watches, onChange, isValid, onSubmit }) => {
  const { name, timeZone } = watches;
  
  return (
    <form 
      name='watches'
      className="form"
      onSubmit={onSubmit}
    >
      <div className="form__row">
        <label htmlFor="name" className="form__input-name">Название</label>
        <input 
        id='name' name='name' 
        type="text"
        value={name} 
        onChange={onChange}
        className="form__input" 
      />
      </div>
      <div className="form__row">
        <label htmlFor="time-zone" className="form__input-name">Временная зона</label>
        <input 
          id='time-zone' name='timeZone'
          type="text" 
          value={timeZone}
          onChange={onChange}
          className="form__input" 
        />
      </div>
      <button className="form__btn" disabled={!isValid}>Добавить</button>
    </form>
  )
}
