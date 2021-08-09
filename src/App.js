import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload   .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login/>
        <br/>
        <Logout />
      </header>
    </div>
  );
}

export default App;
