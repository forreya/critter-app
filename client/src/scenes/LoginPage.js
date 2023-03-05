import '../styles/LoginPage.css'
import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../components/context/UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    })
    if (response.ok) {
      response.json().then((userData) => {
        setUserInfo({userData})
        setRedirectToHome(true);
      })
    } else {
      alert("Incorrect Credentials.")
    }
  }

  if (redirectToHome) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type='text' 
               placeholder="username" 
               value={username}
               onChange={event => setUsername(event.target.value)}/>
        <input type='text' 
               placeholder="password" 
               value={password} 
               onChange={event => setPassword(event.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;