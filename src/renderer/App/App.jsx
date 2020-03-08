import React from 'react';
import reactLogo from './images/react-icon.svg';
import electronLogo from './images/electron-icon.svg';
import jsLogo from './images/javascript-icon.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img
          src={reactLogo}
          className='App-logo'
          alt='react-logo'
          id='react-logo'
        />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          id='react-link'
        >
          Learn React
        </a>
      </div>
      <div className='container'>
        <img
          src={jsLogo}
          className='App-logo'
          alt='javascript-logo'
          id='javascript-logo'
        />
        <a
          className='App-link'
          href='https://javascript.info/'
          target='_blank'
          rel='noopener noreferrer'
          id='javascript-link'
        >
          Learn JavaScript
        </a>
      </div>
      <div className='container'>
        <img
          src={electronLogo}
          className='App-logo'
          alt='electron-logo'
          id='electron-logo'
        />
        <a
          className='App-link'
          href='https://www.electronjs.org/'
          target='_blank'
          rel='noopener noreferrer'
          id='electron-link'
        >
          Learn Electron
        </a>
      </div>
    </div>
  );
}

export default App;
