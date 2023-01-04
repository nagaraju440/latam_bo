import React from 'react'
import {useState} from 'react';
import Editon  from './Icon/Editon.js';
import Editof from './Icon/Editof.js';
import Coldata from './Coldata.json';

function Table24(prob) {
  const [a,setA]=useState([]);
  const dup=prob.data;
  var D=JSON.stringify(dup);
  console.log(prob.first);
  var t=parseInt(D.substring(10,14));
  console.log(t)
   return (
    <div className="bg-background font-normal  text-sm">
        
      <div className="flex flex-col gap-2 content-center justify-center  p-5 ">
        {Coldata.map((l) => {
          
          return (
            <div className="grid grid-cols-9 items-start  rounded-lg p-5 font-normal text-sm ">
             <ParentboxComp a={a} seta={setA}  t={t} len={prob.le} firstid={prob.first}/>
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
            // console.log(tid);
          return (
            
            <div className="grid grid-cols-9 items-start  bg-white  rounded-lg p-5 font-normal text-sm ">
              <CheckboxComp id={tid} a={a} setA={setA}/>
              <div className="underline decoration-1">{l.id}</div>
              <div
                className={
                  l.status === "Completed"
                    ? " text-completed underline"
                    : " text-pending underline"
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

export default Table24;

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
  const [, setChecked] = useState(false);
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
const ParentboxComp=({a,seta,t,len,firstid})=>{
   console.log(a,'io',seta,'lo',t,'len is',len);
  const handleChangeall=(e)=>{
    
    // console.log(e.target.checked,"ii");

    console.log('kiiiii')
    var abcd=[]
    if (e.target.checked)
    {
        // console.log(len);
      for (let i=firstid; i<len; i++)
      {
        // console.log(abcd);
        abcd.push(i)
      } 
      console.log(abcd,"alll vslues")
      seta(abcd)
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