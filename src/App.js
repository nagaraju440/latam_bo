import "./App.css";
import Table from "./Components/Table";
import Table2 from "./Components/Table2";
import Data from "./Components/Data";
import { useState } from "react";
import Page from './Components/Page';

function App() {
  const [state,setState]=useState(false);
  const func=()=>{
    setState(true);
  }
  const [bigdata, setb] = useState([]);
  const [da, setdata] = useState([]);
  const [count, setcount] = useState(0);
  const col = () => {
    var temp=[]
    Data.map((l)=>{
      temp=[...temp,l]
    })
    setdata(temp);
    setb(da.slice(0,10));
    console.log(bigdata);
  };
  
  
  return (
    <div>
      <button onClick={col}>Click me</button>
      <Table2 data={bigdata} />
      <Page data={state}/>
    </div>
  );
}

export default App;
