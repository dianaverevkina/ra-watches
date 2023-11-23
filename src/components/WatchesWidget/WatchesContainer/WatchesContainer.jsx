
import { WatchesItem } from './WatchesItem/WatchesItem'

export const WatchesContainer = ({ watchesList, deleteClock }) => {
  return (
    <ul className='watches-container'>
      {watchesList.map(watches => <WatchesItem 
        key={watches.id} 
        watches={watches}
        deleteClock={deleteClock}
      />)}
    </ul>
  )
}
