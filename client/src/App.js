import './App.css';
import Post from './Post'
import Header from './Header'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route index element={
        <main className="main-container">
          <Header />
          <div className="chirp-container">
            <Post />
            <Post />
          </div>
        </main>
      }></Route>
    </Routes>
  );
}

export default App;
