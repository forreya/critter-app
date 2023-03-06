import ReactTimeAgo from 'react-timeago';

const Chirp = ({content, image, createdAt, poster}) => {

  return (
    <div className='chirp'>
      <img src={'http://localhost:4000/'+image} alt='no image'></img>
      <p className='chirp-info'>
        <a href="" className="original-poster">{poster.username}</a>
        <ReactTimeAgo date={createdAt} />
      </p>
      <p>{content}</p>
    </div>
  )
}

export default Chirp;