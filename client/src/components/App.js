import '../styles/App.css';
import Layout from './Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../scenes/HomePage';
import LoginPage from '../scenes/LoginPage';
import RegisterPage from '../scenes/RegisterPage';
import EditChirp from '../scenes/EditChirp';
import ChirpPage from '../scenes/ChirpPage';
import { UserProvider } from './context/UserContext';
import CreateChirp from '../scenes/CreateChirp';

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

          <Route path='/create-chirp' element={
            <CreateChirp />
          } />

          <Route path='/chirps/:id' element={
             <ChirpPage />
          } />

          <Route path='/edit/:id' element={
             <EditChirp />
          } />
          </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;