import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { RESTRO_IMAGE_URL, starIcon } from '../utils/constants.jsx'
import MenuAccordian from './MenuAccordian.jsx'
import default_restaurant_logo from '../assets/default_restaurant_logo.jpg'
import SouthIndianMenu from '../utils/menu/SouthIndianMenu.json'
import NorthIndianMenu from '../utils/menu/NorthIndianMenu.json'
import BiryaniMenu from '../utils/menu/BiryaniMenu.json'
import ChineseMenu from '../utils/menu/ChineseMenu.json'
import SnacksMenu from '../utils/menu/SnacksMenu.json'
import BurgersMenu from '../utils/menu/BurgersMenu.json'
import PizzaMenu from '../utils/menu/PizzaMenu.json'
import DesertsMenu from '../utils/menu/DesertsMenu.json'
import BeveragesMenu from '../utils/menu/BeveragesMenu.json'
import HealthyMenu from '../utils/menu/HealthyMenu.json'
import MenuShimmerUI from './MenuShimmerUI.jsx'

const cuisineCategoryMap = {
  'South Indian': 'SouthIndian',
  Andhra: 'SouthIndian',
  Kerala: 'SouthIndian',
  Telangana: 'SouthIndian',
  'North Indian': 'NorthIndian',
  Tandoor: 'NorthIndian',
  Curry: 'NorthIndian',
  'Curry Point': 'NorthIndian',
  Mughlai: 'NorthIndian',
  Biryani: 'Biryani',
  Hyderabadi: 'Biryani',
  Kebabs: 'Biryani',
  Chinese: 'Chinese',
  Asian: 'Chinese',
  Korean: 'Chinese',
  Burmese: 'Chinese',
  Tibetan: 'Chinese',
  'Fast Food': 'Snacks',
  Snacks: 'Snacks',
  Burgers: 'Burgers',
  'Rolls & Wraps': 'Snacks',
  'Street Food': 'Snacks',
  Chaat: 'Snacks',
  Pizzas: 'Pizza',
  Pizza: 'Pizza',
  Italian: 'Pizza',
  'Italian-American': 'Pizza',
  Pastas: 'Pizza',
  Desserts: 'Deserts',
  Bakery: 'Deserts',
  Sweets: 'Deserts',
  'Ice Cream': 'Deserts',
  'Ice Cream Cakes': 'Deserts',
  'Cakes & Pastries': 'Deserts',
  Waffle: 'Deserts',
  Beverages: 'Beverages',
  Juices: 'Beverages',
  'Healthy Food': 'Healthy',
  Salads: 'Healthy',
  'Home Food': 'Healthy',
  Thalis: 'Healthy',
  Cafe: 'Healthy',
  Paan: 'Healthy',
  Florist: 'Healthy',
  Batter: 'Healthy',
  'North Eastern': 'Healthy'
}

const categoryMenuMap = {
  SouthIndian: SouthIndianMenu,
  NorthIndian: NorthIndianMenu,
  Biryani: BiryaniMenu,
  Chinese: ChineseMenu,
  Snacks: SnacksMenu,
  Burgers: BurgersMenu,
  Pizza: PizzaMenu,
  Deserts: DesertsMenu,
  Beverages: BeveragesMenu,
  Healthy: HealthyMenu
}

const getMenu = cuisines => {
  for (const cuisine of cuisines) {
    const category = cuisineCategoryMap[cuisine]

    if (category) {
      return categoryMenuMap[category]
    }
  }

  return NorthIndianMenu
}

const RestaurantMenu = () => {
  const [menu, setMenu] = useState()
  const { state } = useLocation() // THis does not work when the URL is opened separately
  console.log(state)
  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    totalRatingsString,
    veg
  } = state
  const { slaString: deliveryTime } = state?.sla
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const response = await new Promise(resolve => {
      setTimeout(resolve, 1200, getMenu(cuisines))
    })
    setMenu(response)
  }
  if (menu == null) return <MenuShimmerUI />
  return (
    <div className='restaurant-menu-container'>
      <div className='restaurant-menu-header'>
        <div className='restaurant-menu-image'>
          <img
            src={RESTRO_IMAGE_URL + cloudinaryImageId}
            onError={e => {
              e.target.src = default_restaurant_logo
            }}
          ></img>
        </div>

        <div className='restaurant-menu-details'>
          <h2>{name}</h2>
          <div className='restaurant-menu-info'>
            {avgRating && (
              <div className='restaurant-menu-rating'>
                <span className='star-container'> {starIcon}</span>
                <span>{avgRating}</span>
                <p>{' (' + totalRatingsString + ')'}</p>
              </div>
            )}
            <span className='menu-sep'>•</span>
            <span>{deliveryTime.toLowerCase()}</span>
          </div>
          <p className='restaurant-menu-cost'>{costForTwo}</p>

          <p className='restaurant-menu-cuisines'>{cuisines.join(', ')}</p>

          <div className='restaurant-menu-tag-container'>
            <span className='restaurant-menu-status'>
              {isOpen ? 'Open' : 'Closed'}
            </span>

            {veg ? (
              <div className='restaurant-menu-veg'>Veg</div>
            ) : (
              <div className='restaurant-menu-nonveg'>Serves Non-veg</div>
            )}
          </div>
        </div>

        <div className='seperator'></div>

        <MenuAccordian menu={menu} />
      </div>
    </div>
  )
}

export default RestaurantMenu
