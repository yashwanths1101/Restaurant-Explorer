import RestaurantCard from './RestaurantCard'
import cards from '../utils/tempMockData'

const BodyComponent = () => {
  return (
    <div className='body'>
      <div className='search'>
        <h2 className='search'>Search</h2>
      </div>
      <div className='res-container'>
        {cards.map(Restaurant => (
          <RestaurantCard
            key={Restaurant?.card?.card?.info?.id}
            data={Restaurant}
          />
        ))}
      </div>
    </div>
  )
}

export default BodyComponent
