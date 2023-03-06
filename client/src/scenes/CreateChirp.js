import '../styles/CreateChirp.css';
import { useState } from 'react';

const CreateChirp = () => {
  const [content, setContent] = useState('')
  const [image, setImage] = useState([]);

  const handleCreateForm = (event) => {
    event.preventDefault();
    const data = new FormData()
    data.set('content', content)
    data.set('image', image[0])
    fetch('http://localhost:4000/create-chirp', {
      method: 'POST',
      body: data
    })
  }

  return (
    <div className="create-container">
      <form className="create-form" onSubmit={handleCreateForm}>
        <div className="form-container">
          <textarea placeholder='Chirp away...' 
                    className="chirp-input"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}/>
          <input type='file' 
                 className="image-upload"
                 onChange={event => setImage(event.target.files)}/>
          <button className="create-button">Create Chirp</button>
        </div> 
      </form>
    </div>
  )
}

export default CreateChirp;


{/* <header>
<Link to="/" className='critter-logo'>Critter</Link>
<nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
</nav>
</header>
    <div className="create-container">
    <form className="create-form">
      <div className="form-container">
        <textarea placeholder='Chirp away...' className="chirp-input"/>
        <div className='image-upload-container'>
          <input type='file' className="image-upload"/>
        </div>
        <button className="create-button">Create Chirp</button>
      </div> 
    </form>
  </div> */}