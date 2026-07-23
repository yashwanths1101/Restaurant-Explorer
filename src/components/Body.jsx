import RestaurantCard from './RestaurantCard'
import restaurantList from '../utils/Data'
import { useState, useEffect } from 'react'
import ShimmerUI from './ShimmerUI'

const searchIcon = (
  <svg
    width='800px'
    height='800px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const BodyComponent = () => {
  const [resList, setResList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = () => {
    setFilteredList(
      resList.filter(restaurant => {
        return restaurant?.info?.avgRating >= 4.0
      })
    )
  }

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()

    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResList(restaurantList)
    setFilteredList(restaurantList)

    console.log(json)
  }

  if (filteredList.length === 0) {
    return <ShimmerUI />
  }

  return (
    <div className='body'>
      <div className='filter-container'>
        <div className='search-container'>
          <input
            className='search-box'
            name='search'
            type='text'
            placeholder='Search here...'
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value)
            }}
          />
          <button
            className='search-btn'
            onClick={() => {
              setFilteredList(
                resList.filter(restaurant =>
                  restaurant?.info?.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
              )
            }}
          >
            {searchIcon}
          </button>
        </div>
        <div className='top-rated'>
          <button onClick={handleClick}>Top Rated Restaurant</button>
        </div>
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
