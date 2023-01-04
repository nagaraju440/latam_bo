import "./App.css";
import Table24 from "./Components/Table24";
import Data from "./Components/Data";
import { useState, useEffect } from "react";
import Page from './Components/Page';

function App() {

  
  useEffect(()=>{
    Specific(1);
  },[])
  const [bigdata, setbigdata] = useState([]);
  const [count, setcount] = useState(0);
  const col = () => {
    var temp=[]
    Data.map((l)=>{
      return temp=[...temp,l]
    })
  
    setbigdata(temp.slice(count,count+10));
  };
  const next=()=>{
    setcount(count+10);
    col();
  }
  
  
  const prev=()=>{
    if(count>0)
    setcount(count-10);
    else
    setcount(0);
    col();
  }
  const Specific=(num)=>{
        if(num===0)
        setcount(0);
        else
        setcount((num-1)*10);
        col();
  }
  
  return (
    <div>
      <Table24 data={bigdata} />
      <Page col={col} Specific={Specific} prev={prev} next={next}/>
    </div>
  );
}

export default App;
