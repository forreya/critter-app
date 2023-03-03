import './App.css';
import Post from './Post'
import Header from './Header'

function App() {
  return (
    <main className="main-container">
      <Header />
      <div className="chirp-container">
        <Post />
        <Post />
      </div>
    </main>
  );
}

export default App;
