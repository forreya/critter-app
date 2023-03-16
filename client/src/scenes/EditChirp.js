import '../styles/EditChirp.css';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const EditChirp = () => {
  const { id } = useParams()
  const [content, setContent] = useState('')
  const [images, setImages] = useState([]);
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/chirps/'+id, {
      method: 'GET',
    }).then(response => response.json().then(
      chirpInfo => {
        setContent(chirpInfo.content)
        setImages(chirpInfo.image)
      }
    ))
  },[])

  const handleUpdateForm = async (event) => {
    event.preventDefault();
    const data= new FormData();
    data.set('content', content);
    if (images?.[0]) {
      data.set('image', images?.[0])
    }
    const response = await fetch('http://localhost:4000/chirps/'+id,{
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirectToHome(true);
    }
  }

  if (redirectToHome) {
    return <Navigate to={`/chirps/${id}`} />
  }

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleUpdateForm}>
        <div className="form-container">
          <textarea placeholder='Chirp away...' 
                    className="chirp-input"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}/>
          <input type='file' 
                 className="image-upload"
                 onChange={event => setImages(event.target.files)}/>
          <button className="edit-button">Update Chirp</button>
        </div> 
      </form>
    </div>
  )
}

export default EditChirp;