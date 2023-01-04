import React from "react";
import Data from "./Data.json";
import { useState, useEffect } from "react";
import Page from "./Page";
import Table24 from "./Table";

function Content() {
  const [le, setl] = useState();
  const [bigdata, setbigdata] = useState([]);
  const [count, setcount] = useState(0);
  const [first, setfirstid] = useState();
  useEffect(() => {
    console.log("useeffect");
    Specific(1);
  }, []);
  const col = (count) => {
    // console("count in col",count)
    var temp = [];
    Data.map((l) => {
      return (temp = [...temp, l]);
    });
    setl(temp.length);
    var dup = temp;
    var st = JSON.stringify(dup);
    setfirstid(parseInt(st.substring(10, 14)));
    setbigdata(temp.slice(count, count + 10));
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
    console.log(num,"in specific function");
    if (num === 0) setcount(0);
    else 
    {
      var x=(num-1)*10
    setcount(x);
    console.log(x,count)
    console.log("count is",count)
    col(x);
    }
  };
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Table24 data={bigdata} le={le} first={first} calssName="min-h-full" />
      <Page
        className="position"
        col={col}
        Specific={Specific}
        prev={prev}
        next={next}
      />
    </div>
  );
}

export default Content;
