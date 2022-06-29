import  { useState, useRef } from "react";

const useTimer = () => {
  const [counter,setCounter] = useState(0)
  const isStart = () => {
    refInterval.current = setInterval(() =>{
      setCounter(counter => counter + 1)
    },10)
  }
  const active = useRef({disabled : "false"});
  let refInterval = useRef();

  const startTimer = () => {
    isStart();
    console.log(counter);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current)
    active.current.disabled = false;
  };
  const resetTimer = () => {
    active.current.disabled = false;
    setCounter(0);
    clearInterval(refInterval.current)
  };

  return { counter,resetTimer,startTimer,stopTimer,active };
};
export default useTimer;