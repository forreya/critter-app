import { useEffect, useState } from 'react';
import Chirp from '../components/Chirp'

const HomePage = () => {
  const [chirps, setChirps] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/chirps', {})
      .then(response => response.json())
      .then(chirps => {
        setChirps(chirps)
      })
  }, [])

  return (
    <div className="chirp-container">
      {chirps.length > 0 && chirps.map((chirp) => {
        return <Chirp key={chirp._id} {...chirp}/>
      })}
  </div>
  )
}

export default HomePage;