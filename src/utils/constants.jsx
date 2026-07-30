export const RESTRO_IMAGE_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/'

export const RESTAURANT_API =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.49398503202869&lng=80.49873917889643&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

export const searchIcon = (
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

export const starIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={256}
    height={256}
    viewBox='0 0 256 256'
    xmlSpace='preserve'
  >
    <g
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1
      }}
      transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'
    >
      <path
        d='M 47.755 3.765 l 11.525 23.353 c 0.448 0.907 1.313 1.535 2.314 1.681 l 25.772 3.745 c 2.52 0.366 3.527 3.463 1.703 5.241 L 70.42 55.962 c -0.724 0.706 -1.055 1.723 -0.884 2.72 l 4.402 25.667 c 0.431 2.51 -2.204 4.424 -4.458 3.239 L 46.43 75.47 c -0.895 -0.471 -1.965 -0.471 -2.86 0 L 20.519 87.588 c -2.254 1.185 -4.889 -0.729 -4.458 -3.239 l 4.402 -25.667 c 0.171 -0.997 -0.16 -2.014 -0.884 -2.72 L 0.931 37.784 c -1.824 -1.778 -0.817 -4.875 1.703 -5.241 l 25.772 -3.745 c 1.001 -0.145 1.866 -0.774 2.314 -1.681 L 42.245 3.765 C 43.372 1.481 46.628 1.481 47.755 3.765 z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'rgb(0,0,0)',
          fillRule: 'nonzero',
          opacity: 1
        }}
        transform=' matrix(1 0 0 1 0 0) '
        strokeLinecap='round'
      />
    </g>
  </svg>
)

export const RESTAURANT_MENU_API =
  'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.49398503202869&lng=80.49873917889643&restaurantId='
