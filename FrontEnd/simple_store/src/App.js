import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
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
=======
import Sign_Up from './Pages/SignIn/Sign_Up';
import Mainroutes from './Routes/Mainroutes';

function App() {
  return (
    <>
      <Mainroutes />
      
    </>
   
    
>>>>>>> Stashed changes
  );
}

export default App;
