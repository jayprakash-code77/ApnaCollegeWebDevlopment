// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// import Title2 from "./Title.jsx"; // First way to import. Here the "Title" can be replaced by any other name.
import { Title } from "./Title.jsx"; // here the name cannot be changed.
function App() { // In this function we are adding the extra "div" node. To avoid this we use "Fragment".
  return (
    <div>
      <Title />
      <h1>Hello World!</h1>
    </div>
  );
}

// Fragment example 
function Frag() {
  return (
    <>
      <Title />
      <h1>Hello Worldddddd!</h1>
    </>
  );
}


// Curly Bases
let a = 3;
let b = 4;
function Curly() {
  return (
    <>
      <div>The sum of `a` and `b` {a + b}</div>
    </>
  );
}



// Structuring the App  >>>>>>>>>>>>>
// import Product from "./Product.jsx";
function Styl() {
  return (
    <>
      <Product />
      <Product />
      <Product />
    </>
  )
}

// export default App;
// export default Frag; // Fragment example 
// export default Curly;
// export default Styl; 

import Product from "./Product.jsx";
function Props() {
  let price = 3000;
  return (
    <>
      <Product title="Phone" price={price} />
      <div className="Product">This is the example of default value set for price:<Product title="Company" /></div>

    </>
  );
}
// export default Props; 



// Destructuring >>>>>>>>>>>>>>> 
import Parent from "./Parent.jsx";
function Destructuring() {
  let data = {
    name: "Jayprakash",
    surname: "Maurya"
  }
  return (
    <Parent {...data} /> //Forwarding props with the JSX spread syntax 
  );
}
// export default Destructuring;



// Passing Array and Objects
import ArrayAndObjectTab from "./ArrayAndObjectTab.jsx";
function ArrObj() {
  return (
    <>
      <ArrayAndObjectTab />
    </>
  );
}
export default ArrObj;










// <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>