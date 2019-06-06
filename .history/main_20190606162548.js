var randonNumber = Math.floor((Math.random() * 100) + 1);  
var par = []
var impar = []


function separateNumbers(randonNumber){   
  if((randonNumber % 2) === 0){      
    par.push(randonNumber)
    console.log(par)
  }else {
    impar.push(randonNumber)
     console.log(impar)
  }
 
  }

separateNumbers()