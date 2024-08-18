import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Conditional from "./ConditionalTab.jsx";

function App() {
  return (
    <>
        <Conditional />
    </>
  )
}

export default App


/* 
       <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article> 










      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/