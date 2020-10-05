function pairOfSocks(arrayOfSocks) {
  let sockObject = {};

  let pairCount = 0;
 
  for (let sock of arrayOfSocks) {
    
    if (sockObject[sock]) {
      sockObject[sock] += 1;
    } else {
      sockObject[sock] = 1;
    }
  }
  

  for (let pair of sockObjectect.keys(sockObject)) {
    if (sockObject[pair] > 1) {
      console.log(sockObject[pair]);
      if (sockObject[pair] % 2 === 0) {
        pairCount = pairCount + sockObject[pair] / 2;
      } else {
        pairCount = pairCount + (sockObject[pair] - 1) / 2;
      }
    }
  }
  return pairCount;

  
}

pairOfSocks([10, 20, 20, 10, 10, 30, 50, 10, 20]);