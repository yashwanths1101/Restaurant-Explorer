import { useRouteError, Link } from 'react-router'
const Error = () => {
  const err = useRouteError()
  return (
    <div className='error'>
      <h1>Oops! Something went wrong.</h1>
      <h2>
        {err?.status} {err?.statusText}
      </h2>
      <p>
        This page you are looking for doesn't exist or an unexpected error
        occurred.
      </p>

      <Link to='/'>Go Back Home</Link>
    </div>
  )
}

export default Error
