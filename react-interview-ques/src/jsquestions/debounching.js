const myDebounce = (func, delay) => {
    let timer 
    
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func(...args)
        },delay)
    }

}

const myThrottle = (func, limit) => { 
    let last = 0
    return function(...args){
        const now = new Date().getTime()
        if(now -last < limit) return
        last = now
        func(...args)
    }  

}


//===============================  =           ========================

import React, { useState, useEffect, useMemo } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const url = "https://fakestoreapi.com/products";
  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      });
  };
  const [data, setData] = useState([]);
  const myDebounce = (fn, delay) => {
    let time;
    return (...args) => {
      clearTimeout(time);
      time = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const debounce = useMemo(() => myDebounce(fetchData, 3000), []);
  const onChange = (e) => {
    setValue(e.target.value);
    debounce();
    // fetch(url).then((res) => console.log('res'))
  };

  return (
    <div>
      <input onChange={onChange}></input>
    </div>
  );
}
