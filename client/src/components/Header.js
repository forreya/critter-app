import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  const [username, setUsername] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
    .then((response) => response.json())
    .then((userInfo) => setUsername(userInfo.username))
  }, [])

  return (
    <header>
      <Link to="/" className='critter-logo'>Critter</Link>
      <nav>
        {username && (
          <>
            <Link to='/create-chirp'>New Chirp</Link> 
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header;