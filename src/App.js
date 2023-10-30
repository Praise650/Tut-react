import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import AboutMePage from './pages/about_me';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/pages/about_me" element={<AboutMePage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

function HomePage(){
  return (
    <header className="App-header">
      <div className='container'>
      <div class="item"><SplashImage/></div>
      <div class="item">
        <a 
          className="App-link"
          href="/pages/about_me"
          // target="_blank"
          rel="noopener noreferrer">
          About Me
          </a>
        </div>
        </div>
      </header>
  );
}

function SplashImage(){
  return (
    <div className="SplashImage">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
  );
}


export default App;
