import './App.css';
import logo from './holberton-logo.jpg'
import { getFullYear, getFooterCopy } from './utils.js'

function App() {
  return (
    <><header className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </header><div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email:</label>
        <input className='input-email' type="text" />
        <label className='password'> Password:</label>
        <input className='input-password' type="password" />
        <button>OK</button>
      </div><footer className="App-footer">
        <p>Copyright {getFullYear()} {getFooterCopy(true)}</p>
      </footer></>
  );
}

export default App;
