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
import { useEffect } from 'react'

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

  return BiryaniMenu
}

const useRestaurantMenu = (menu, setMenu, cuisines) => {
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const response = await new Promise(resolve => {
      setTimeout(resolve, 1200, getMenu(cuisines))
    })
    setMenu(response)
  }
}

export default useRestaurantMenu
