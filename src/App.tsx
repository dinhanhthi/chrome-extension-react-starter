import React from 'react'

import './App.css'
// 👇 Uncomment only if you use Previewjs (https://previewjs.com/)
// import './assets/tailwind.css'
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-yellow-300 text-xl">Hello.</p>
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
  )
}

export default App
