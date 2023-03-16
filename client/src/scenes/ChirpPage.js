import { useContext, useEffect, useState } from "react";
import ReactTimeAgo from 'react-timeago';
import '../styles/ChirpPage.css'
import { useParams } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";

const ChirpPage = () => {
  const [chirpInfo, setChirpInfo] = useState('')
  const { userInfo } = useContext(UserContext)
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/chirps/${id}`, {
      method: 'GET',
    })
      .then(response => response.json()
      .then(chirpData => setChirpInfo(chirpData)))
  },[])

  if (!chirpInfo) return <div>No Information Available</div>

  return (
    <div className="chirp-page-container">
      <div className="chirp-page-header">
        <p className="chirp-page-info"><ReactTimeAgo date={chirpInfo.createdAt}/> by {chirpInfo.poster.username}</p>
        { userInfo.username === chirpInfo.poster.username && (
          <a href={`/edit/${id}`} className="edit-btn">Edit Chirp</a>
        )}
      </div>
      <p className="chirp-page-content">{chirpInfo.content}</p>
      <div className="chirp-page-image-container">
        <img src={`http://localhost:4000/${chirpInfo.image}`} alt="Image not found." className="chirp-page-image"/>
      </div>
    </div>
  )
}

export default ChirpPage;
