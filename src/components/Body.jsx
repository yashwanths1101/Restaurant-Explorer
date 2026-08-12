import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BodyShimmerUI from './Shimmer/BodyShimmerUI'
import {
  RESTRO_IMAGE_URL,
  RESTAURANT_API,
  searchIcon
} from '../utils/constants'
import useFetchRestaurantData from '../utils/useFetchRestaurantData'

const BodyComponent = () => {
  const [resList, setResList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useFetchRestaurantData(setResList, setFilteredList)

  const handleClick = () => {
    setFilteredList(
      resList.filter(restaurant => {
        return restaurant?.info?.avgRating >= 4.0
      })
    )
  }

  if (resList.length === 0) {
    return <BodyShimmerUI />
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
          <Link
            to={'restaurant/' + Restaurant?.info?.id}
            state={Restaurant?.info}
            key={Restaurant?.info?.id}
          >
            <RestaurantCard data={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BodyComponent
