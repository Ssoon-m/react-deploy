import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('env', process.env.NODE_ENV);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>리액트 프로젝트 S3 + CloudFront 배포</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          workflow test
        </a>
        <div>cloudfont cash invalidate test</div>
        <div>{process.env.REACT_APP_ENV_TEST}</div>
      </header>
    </div>
  );
}

export default App;
