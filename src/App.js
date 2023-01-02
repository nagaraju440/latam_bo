import './App.css';
import React, { useState } from 'react';
import Data from './data.json';
import Table from './table.js';

function App() {
  // const [checked, setChecked] = useState(false);
  
    // const handleChange = () => {
    //   setChecked(prevState => !prevState);
    // };
  return (
    <div>
      {/* <div  className='text-xl bg-green-500' >hello tailwind text</div>
      <h1>hello </h1>
      {Data.map((Details,i)=>{
        return <h1>{Details.id}</h1>
      })} */}
      {/* <div>
      <input type="checkbox" onChange={handleChange} checked={checked} />
      Select All
      <br />
      <input type="checkbox" checked={checked} />
      Option 1
      <br />
      <input type="checkbox" checked={checked} />
      Option 2
      <br />
      <input type="checkbox" checked={checked} />
      Option 3
    </div> */}
    <Table/>
    </div>
  );
}

export default App;
