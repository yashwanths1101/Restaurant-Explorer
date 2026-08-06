import { useState } from 'react'

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
              className='category-title'
              onClick={() => {
                setOpenCategory(
                  openCategory === category?.categoryId
                    ? null
                    : category?.categoryId
                )
              }}
            >
              {category?.title}
            </button>

            {openCategory === category?.categoryId &&
              category?.itemCards.map(item => {
                return (
                  <div className='menu-item' key={item?.card?.info?.id}>
                    {item?.card?.info?.name}
                  </div>
                )
              })}
          </div>
        )
      })}
    </div>
  )
}

export default MenuAccordian
