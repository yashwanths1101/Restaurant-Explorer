import RESTRO_IMAGE_URL from '../utils/constants'

const RestaurantCard = props => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla: { slaString: time },
    cuisines
  } = props?.data?.card?.card?.info
  return (
    <div className='restro-card'>
      <div className='restro-image'>
        <img alt='' src={RESTRO_IMAGE_URL + cloudinaryImageId}></img>
      </div>
      <div className='restro-info'>
        <h4>{name}</h4>
        <p className='cuisines'>{cuisines.join(', ')}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
