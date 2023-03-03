import '../styles/App.css';
import Layout from './Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../scenes/HomePage';
import LoginPage from '../scenes/LoginPage';
import RegisterPage from '../scenes/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={
          <HomePage />
        } />
        
        <Route path='/login' element={
          <LoginPage />
        } />

        <Route path='/register' element={
          <RegisterPage />
        } />
      </Route>
    </Routes>
  );
}

export default App;



{/* <main className="main-container">
<header>
      <Link to="/" className='critter-logo'>Critter</Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
    <div className="login-container">
    <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input type='text' placeholder="username"></input>
        <input type='text' placeholder="password"></input>
        <button>Login</button>
      </form>
    </div>
</main> */}