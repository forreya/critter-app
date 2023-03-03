import '../styles/RegisterPage.css'
import {useState} from 'react'

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'Content-Type': 'application/json'}
      })  

    if (response.status === 200) {
      alert('Registration successful :)')
    } else {
      alert('Registration failed :(')
    }
  }

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <input type='text' 
               placeholder="username"
               value = {username}
               onChange = {event => setUsername(event.target.value)} />
        <input type='text' 
               placeholder="password"
               value = {password}
               onChange = {event => setPassword(event.target.value)} />
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage;