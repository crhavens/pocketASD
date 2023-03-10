import logo from './logo.svg';
import './css/App.css';
import Appointments from './components/Appointments';
import Home from './components/Home';
import Navbar from './components/navbar';
import { Route, Routes } from "react-router-dom"
import UserInformation from './components/UserInformation';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/users" element={<UserInformation />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
