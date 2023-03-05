import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
    .then((response) => response.json())
    .then((userInfo) => setUsername(userInfo.username))
  }, [])

  const logout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUsername(null);
  }

  return (
    <header>
      <Link to="/" className='critter-logo'>Critter</Link>
      <nav>
        {username && (
          <>
            <Link to='/create-chirp'>New Chirp</Link> 
            <a onClick={logout}>Logout</a>
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