import RestaurantCard from './RestaurantCard'
import restaurantList from '../utils/Data'
import { useState } from 'react'
const BodyComponent = () => {
  const [filteredList, setFilteredList] = useState(restaurantList)
  return (
    <div className='body'>
      <div className='top-rated'>
        <button
          onClick={() => {
            setFilteredList(
              restaurantList.filter(restaurant => {
                return restaurant?.info?.avgRating >= 4.0
              })
            )
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className='res-container'>
        {filteredList.map(Restaurant => (
          <RestaurantCard key={Restaurant?.info?.id} data={Restaurant} />
        ))}
      </div>
    </div>
  )
}

export default BodyComponent
