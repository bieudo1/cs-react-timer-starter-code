export const formatTime = (counter) => {
      let secondCounter =  (`0${counter % 60}`.slice(-2));
      let minuteCounter = (`0${Math.floor(counter / 60) % 60}`.slice(-2)); 
      let hoursCounter = (`0${Math.floor(counter / 3600)}`.slice(-2)); 

  return `${hoursCounter} : ${minuteCounter} : ${secondCounter}`;
};