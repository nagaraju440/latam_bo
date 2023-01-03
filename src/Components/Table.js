import React from 'react'
import Data from './Data.json';
import {useState} from 'react';
import Editof from './Editof';
import Editon from './Editon';

function Table() {
  const [ch,setch]=useState("Editof");
  const change= ()=>{
      if (ch==="Editof")
        setch("Editon");
      else
        setch("Editof");
  }
  return (
    <div className="grid grid-cols-1 content-center bg-background font-sans font-normal text-sm">
            <div className="flex flex-row justify-around mt-3 mx-3 items-center rounded-md font-normal text-sm">
                <div><input type="checkbox" className="w-[20px] h-[20px]"></input></div>
                <div className="flex 1">id</div>
                <div className="flex 1">Estatus</div>
                <div className="flex 2">Nombre Campana</div>
                <div className="flex 1">Duracion</div>
                <div className="flex 2">Agente MKT</div>
                <div className="flex 1">Solicitante</div>
                <div className="flex 2">Fecha Creacion</div>
                <div className="flex 1">Icon</div>
            </div>
            {Data.map((l)=>{
                return (
                <div className="bg-white flex flex-row justify-around py-2 mb-3 mx-3 items-center rounded-md font-normal text-sm">
                    <div><input type="checkbox" className="w-5 h-5"></input></div>
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