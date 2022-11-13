import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const error = () => {
    throw new Error('foo error');
  };
  const foo = () => {
    try {
      error();
    } catch (e) {
      console.log('foo >>> ', e);
    }
  };
  const bar = () => {
    try {
      error();
    } catch (e) {
      console.log('bar >>> ', e);
    }
  };
  return (
    <div className='App'>
      <button
        onClick={() => {
          foo();
          bar();
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
