import '../styles/App.css';
import Layout from './Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../scenes/HomePage';
import LoginPage from '../scenes/LoginPage';
import RegisterPage from '../scenes/RegisterPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;