import { useState } from 'react'
import MenuItem from './MenuItem'

const MenuAccordian = ({ menu }) => {
  const cards = menu?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  const [openCategory, setOpenCategory] = useState(null)

  const categories = cards.filter(card => {
    return (
      card?.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )
  })
  console.log(categories)
  return (
    <div className='accordian-container'>
      {categories.map(categoryData => {
        const category = categoryData?.card?.card
        return (
          <div className='category-container' key={category?.categoryId}>
            <button
              className='category-title-btn'
              onClick={() => {
                setOpenCategory(
                  openCategory === category?.categoryId
                    ? null
                    : category?.categoryId
                )
              }}
            >
              <span>{category?.title}</span>

              {openCategory === category.categoryId ? (
                <svg
                  width='2rem'
                  height='2rem'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16 14L12 10L8 14'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              ) : (
                <svg
                  width='2rem'
                  height='2rem'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 10L12 14L16 10'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </button>
            <MenuItem category={category} openCategory={openCategory} />
          </div>
        )
      })}
    </div>
  )
}

export default MenuAccordian
