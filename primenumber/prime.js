function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function findPrimeByRange(start, finish) {
  var realStart = (start <= finish) ? start : finish;
  var realEnd = (start > finish) ? start : finish;
  var numbers = [];
  
  for(var current = realStart; current <= realEnd; current++) {
    if(isPrime(current)) {
      numbers.push(current);
    }
  }

  return numbers;
}
 console.log(findPrimeByRange(11, 40));