import { useEffect } from 'react'

const useFetchRestaurantData = (setResList, setFilteredList) => {
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await new Promise(resolve =>
      setTimeout(resolve, 1200, fetch('/restaurants/page-1.json'))
    )
    const json = await response.json()
    const restaurantList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResList(restaurantList)
    setFilteredList(restaurantList)

    console.log(json)
  }
}

export default useFetchRestaurantData
