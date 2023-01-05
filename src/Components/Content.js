import React from "react";
import Data from "./Data.json";
import { useState, useEffect } from "react";
import Page from "./Page";
import Table from "./Table";
import Coldata  from "./Coldata";

function Content() {
  const [le, setl] = useState();
  const [bigdata, setbigdata] = useState([]);
  const [count, setcount] = useState(0);
  const [first, setfirstid] = useState();
  const [bigcoldata,setbigcoldata]=useState([]);
  const [ps,setps]=useState(false);
  useEffect(() => {
    console.log("useeffect");
    Specific(1);
  }, []);
  const col = (count) => {
    var tabledata = [];
    var coldata=[];
    Data.map((l) => {
      return (tabledata = [...tabledata, l]);
    });
    setl(tabledata.length);
   Coldata.map((l)=>{
    return(coldata=[...coldata,l]);
   });
   setbigcoldata(coldata);
    var dup = tabledata;
    var st = JSON.stringify(dup);
    setfirstid(parseInt(st.substring(10, 14)));
    setbigdata(tabledata.slice(count, count + 10));
  };
  const next = () => {
    setcount(count + 10);
    col(count + 10);
  };

  const prev = () => {
    if (count > 0){
      setcount(count - 10)
      col(count-10);
    }else{
      setcount(0);
      col(0)
    }
     
    
  };
  const Specific = (num) => {
    if (num === 0) setcount(0);
    else 
    {
    var x=(num-1)*10
    setcount(x);
    col(x);
    }
  };
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between gap-[50px]">
      <Table data={bigdata} coldata={bigcoldata} le={le} first={first} ps={ps} calssName="min-h-full" />
      <Page
        className="position"
        col={col}
        Specific={Specific}
        prev={prev}
        next={next}
        le={le}
        ps={ps}
        setps={setps}
      />
    </div>
  );
}

export default Content;
