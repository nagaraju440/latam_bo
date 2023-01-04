import React from 'react'
import Data from './data.json';
import {useState} from 'react';
import Editon  from './editon.js';
import Editof from './editof.js';
import Data1 from './data1.json';

function Table(prob) {
  const [checked, setChecked] = useState(false);
  const [a,setA]=useState([]);
   return (
    
    <div className="bg-background font-normal  text-sm">
      <div className="flex flex-col gap-2 content-center justify-center  p-5 ">
        {Data1.map((l) => {
          
          return (
            <div className="grid grid-cols-9 items-start  rounded-lg p-5 font-normal text-sm">
             <ParentboxComp a={a} seta={setA} length={Data.length}  />
              <div className="">{l.id}</div>
              <div className="">{l.status}</div>
              <div className="">{l.type}</div>
              <div className="">{l.duration}</div>
              <div className="">{l.format}</div>
              <div className="">{l.instrutor}</div>
              <div className="">{l.pid}</div>
            </div>
          );
        })}
        {Data.map((l) => {
         
          return (
            <div className="grid grid-cols-9 items-start  bg-white  rounded-lg p-5 font-normal text-sm">
              <CheckboxComp id={l.id} a={a} setA={setA} />
              <div className="">{l.id}</div>
              <div
                className={
                  l.status === "Completed"
                    ? "basis-1/8 text-completed underline"
                    : "basis-1/8 text-pending underline"
                }
              >
                {l.status}
              </div>
              <div className="">{l.format}</div>
              <div className="">{l.days}</div>
              <div className="">{l.type}</div>
              <div className="">{l.instrutor}</div>
              <div className="">{l.pid}</div>
              <div className="flex justify-end items-end ">
                <EditComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;

const EditComponent = () => {
  const [ch, setch] = useState("Editof");
  const change = () => {
    if (ch === "Editof") setch("Editon");
    else setch("Editof");
  };
  return (
    <div onClick={change}>{ch === "Editon" ? <Editon /> : <Editof />}</div>
  );
};
const CheckboxComp=({id,a,setA})=>{
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prevState => !prevState);
    console.log(id,a,setA)
    if(a.includes(id))
    {
      var index = a.indexOf(id);
      a.splice(index, 1);
      console.log(a)
      setA(a)
    }
    else{
      console.log("lo")
      setA(a.concat(id))
    } 
    console.log(a.length)
  }; 
 

  return(
    <input type="checkbox" className="w-5 h-5" onChange={handleChange} checked={a.includes(id)} ></input>
  )
} 
const ParentboxComp=({a,seta,length})=>{
  
  const handleChangeall=(e)=>{
    
    console.log(e.target.value,"ii");
    var tep=[]
    console.log(length)
    if (e.target.checked)
    {
      for (let i=1; i<=length; i++)
      {
        console.log(i)
        console.log(a)
        tep.push(i)
      } 
      console.log(tep)
      seta(tep)
    }
    else
    {
     seta([])
    }
  }

  return(
    <input type="checkbox" className="w-5 h-5" onChange={handleChangeall} ></input>
  )
}