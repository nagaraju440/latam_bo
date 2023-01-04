import "./App.css";
import { Dashbaord } from "./pages/Dashbaord";
import HeaderLayout from './HeaderLayout/HeaderLayout';
import Section2 from './Filters/Section2';
import EditComponent from './EditComponent/EditComponent';
import Table24 from "./components/Table24";
import Data from "./components/Data";
import { useState, useEffect } from "react";
import Page from './components/Page';
import Instructor from './pages/Instructor/Index'

function App() {

  
  // useEffect(()=>{
  //   Specific(1);
  // },[])
  // const [bigdata, setbigdata] = useState([]);
  // const [count, setcount] = useState(0);
  // const col = () => {
  //   var temp=[]
  //   Data.map((l)=>{
  //     return temp=[...temp,l]
  //   })
  
  //   setbigdata(temp.slice(count,count+10));
  // };
  // const next=()=>{
  //   setcount(count+10);
  //   col();
  // }
  
  
  // const prev=()=>{
  //   if(count>0)
  //   setcount(count-10);
  //   else
  //   setcount(0);
  //   col();
  // }
  // const Specific=(num)=>{
  //       if(num===0)
  //       setcount(0);
  //       else
  //       setcount((num-1)*10);
  //       col();
  // }
  
  return (
    <div>
      <Instructor/>
      {/* <Navbar/>
      <Sidebar/>
      <HeaderLayout></HeaderLayout>
      <Section2></Section2>
      <EditComponent></EditComponent>
      <Table24 data={bigdata} />
      <Page col={col} Specific={Specific} prev={prev} next={next}/> */}
      </div>
  )
    }

export default App
