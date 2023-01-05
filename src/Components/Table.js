import React from 'react'
import {useState} from 'react';
import Editon  from './Icon/Editon.js';
import Editof from './Icon/Editof.js';
// import { setPowerset } from 'mathjs';
// import Coldata from './Coldata.json';

function Table(prob) {
  const [a,setA]=useState([]);
  const dup=prob.data;
  var D=JSON.stringify(dup);
  var t=parseInt(D.substring(10,14));
  const [ch,setch]=useState(0);
   return (
    <div className="font-normal  text-sm">
        
      <div className="flex flex-col gap-2 content-center justify-center ">
        {prob.coldata.map((l) => {
          
          return (
            <div className="grid grid-cols-9 items-start  rounded-lg p-5 font-normal text-sm text-[#898989]">
             <ParentboxComp a={a} seta={setA} ps={prob.ps} setps={prob.setps} t={t} len={prob.le} firstid={prob.first}/>
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
        {prob.data.map((l) => {
            
          var tid=parseInt(l.id.substring(3,7));
          return (
            
            <div className="grid grid-cols-9 justify-content items-center  bg-white  rounded-lg p-5 font-normal text-sm h-[65px]">
              <CheckboxComp id={tid} a={a} setA={setA}/>
              <div className="underline decoration-1">{l.id}</div>
              <div
                className={
                  l.status === "Aprobacion"? " text-Aprobacion underline":(l.status === "Promoción"? " text-Promocion underline":(l.status === "Cursada"? " text-Promocion underline":((l.status === "Rendicion"? " text-Rendicion underline":"text-Cierre underline"))))
                }
              >
                {l.status}
              </div>
              <div className="">{l.format}</div>
              <div className="">{l.days}</div>
              <div className="">{l.type}</div>
              <div className="">{l.instrutor}</div>
              <div className="">{l.pid}</div>
              <div className="flex items-end justify-end">
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
    <>
    <div onClick={change}>{ch === "Editon" ? <Editon /> : <Editof />}</div>
  </>
  );
};
const CheckboxComp=({id,a,setA})=>{
    // console.log("hello",a.includes(id),a,id)
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prevState => !prevState);
    // console.log(id,a,setA)
    
    if(a.includes(id))
    {
      var index = a.indexOf(id);
      a.splice(index, 1);
    //   console.log(a)
      setA(a)
    }
    else{
    //   console.log("lo")
      setA(a.concat(id))
    } 
    // console.log(a.length)
  }; 
 

  return(
    <input type="checkbox" className="w-5 h-5" onChange={handleChange} checked={a.includes(id)} ></input>
  )
} 
const ParentboxComp=({a,seta,t,ps,setps,firstid})=>{
  //  console.log(a,'io',seta,'lo',t,'len is',len);
  const handleChangeall=(e)=>{
    
    // console.log(e.target.checked,"ii");

    // console.log('kiiiii')
    var abcd=[]
    if (e.target.checked)
    {
        // console.log(len);
      for (let i=t; i<t+10; i++)
      {
        // console.log(abcd);
        abcd.push(i)
      } 
      // console.log(abcd,"alll vslues")
      seta(abcd)
      setps(true);
    }

    else
    {
     seta([])

    }
  }

  return(
    <input type="checkbox" className="w-5 h-5" checked={ps} onChange={handleChangeall} ></input>
  )
}