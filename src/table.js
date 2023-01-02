import React from 'react'
import Data from './data.json';
import {useState} from 'react';
import Editon  from './editon.js';
import Editof from './editof.js';
import Data1 from './data1.json';
function Table() {
  const [ch,setch]=useState("Editof");
  const [checked, setChecked] = useState(false);
  const [schecked, ssetChecked] = useState(false);
  const change= ()=>{
      if (ch==="Editof")
        setch("Editon");
      else
        setch("Editof");
  }
  const handleChange = () => {
      setChecked(prevState => !prevState);
    };
    const ki=()=>{
        ssetChecked(true);
    }
  return (
    <div className="grid grid-cols-1 content-center bg-background font-sans font-normal text-sm">
            <div className="flex flex-row justify-around mt-3 mx-3 items-center rounded-md font-normal text-sm">
                {
                    Data1.map((k,i)=>{
                        return (
                    <div>

                            
                <div><input type="checkbox" className="w-[20px] h-[20px]" onChange={handleChange} checked={checked}></input></div>
                <div className="flex 1">{k.id}</div>
                <div className="flex 1">{k.status}</div>
                <div className="flex 2">{k.format}</div>
                <div className="flex 1">{k.days}</div>
                <div className="flex 2">{k.type}</div>
                <div className="flex 1">{k.instrutor}</div>
                <div className="flex 2">{k.pid}</div>
                <div className="flex 1">Icon</div>
                </div>
                        )
                    })
                }
            </div>
            {Data.map((l,i)=>{
                return (
                <div className="bg-white flex flex-row justify-around py-2 mb-3 mx-3 items-center rounded-md font-normal text-sm">
                    <div><input type="checkbox" className="w-5 h-5" checked={checked} onChange={ki}></input></div>
                    <div className="flex-1">{l.id}</div>
                    <div className={l.status === 'Completed'?"flex-1 text-completed":'flex-1 text-pending'}>{l.status}</div>
                    <div className="flex-1 ">{l.format}</div>
                    <div className="flex-1">{l.days}</div>
                    <div className="flex-1">{l.type}</div>
                    <div className="flex-1">{l.instrutor}</div>
                    <div className="flex-2">{l.pid}</div>
                    <div onClick={change} className="flex 1">
                      {
                        (ch==="Editon")?<Editon />:<Editof />
                      }
                    </div>
                </div>
                )
            })}
        </div>
        

  )
}

export default Table