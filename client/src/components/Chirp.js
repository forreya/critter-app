import ReactTimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';

const Chirp = ({_id, content, image, createdAt, poster}) => {

  return (
    <Link to={`/chirps/${_id}`} className='chirp-link' style={{textDecoration: 'none'}}>
    <div className='chirp'>
        <img src={'http://localhost:4000/'+image} alt='no image'></img>
        <div className='chirp-info'>
        <p className="original-poster">{poster.username}</p>
        <ReactTimeAgo date={createdAt} />
      </div>
        <p className='chirp-content'>{content}</p>
    </div>
    </Link>
  )
}

export default Chirp;