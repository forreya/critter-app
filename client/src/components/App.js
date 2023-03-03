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
        
        <Route path={'/login'} element={
          <LoginPage />
        } />

        <Route path={'/register'} element={
          <RegisterPage />
        } />
      </Route>
    </Routes>
  );
}

export default App;
