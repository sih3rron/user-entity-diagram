export function xAxis(i, items) {
    const gap = 100;
    if (i <= items / 2) return i * gap;
    if (i > items / 2) return (i * gap) - (items / 2 * gap);
}

export function yAxis(i, items) {
    if (i >= items / 2) return 150;
    return 0;
}


/* export function xAxis(i, items, tcount) {
    let transactCount = parseInt(tcount);
  
    if (transactCount >= 40) {
      console.log("This is 40!");
      return 0;
    } else if(transactCount >= 30 && transactCount < 40){
      console.log("This is 30!");
      return 500;
    } else if(transactCount >= 20 && transactCount < 30){
      console.log("This is 20!");
      return 1000;
    } else if(transactCount >= 10 && transactCount < 20){
      console.log("This is 10!");
      return 1500;
    } else if(transactCount < 10){
      console.log("This is 0!");
      return 2000;
    }
  
  }
  
  export function yAxis(i, items, tcount) {
    let transactCount = parseInt(tcount);
    if (transactCount >= 40) {
      console.log("This is 40!");
      return 0;
    } else if(transactCount >= 30 && transactCount < 40){
      console.log("This is 30!");
      return 500;
    } else if(transactCount >= 20 && transactCount < 30){
      console.log("This is 20!");
      return 1000;
    } else if(transactCount >= 10 && transactCount < 20){
      console.log("This is 10!");
      return 1500;
    } else if(transactCount < 10){
      console.log("This is 0!");
      return 2000;
    }
  } */
  