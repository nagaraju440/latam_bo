import React from "react";
import Data from "./Data.json";
import { useState, useEffect } from "react";
import Page from "./Page";
import Table24 from "./Table";

function Content() {
  useEffect(() => {
    Specific(1);
    console.log("one")
  }, []);
  const [le, setl] = useState();
  const [bigdata, setbigdata] = useState([]);
  const [count, setcount] = useState(0);
  const [first, setfirstid] = useState();
  const col = () => {
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
    col();
  };

  const prev = () => {
    if (count > 0) setcount(count - 10);
    else setcount(0);
    col();
  };
  const Specific = (num) => {
    console.log(num)
    if (num === 0) setcount(0);
    else setcount((num - 1) * 10);
    col();
  };
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Table24 data={bigdata} le={le} first={first}/>
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
