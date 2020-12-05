sumPrimes = (num) => {
  let result = 0;
  let counter = 0;
  
  if(num < 2){
    return false;
  }

  var squareRoot = Math.floor(Math.sqrt(num));

  for (var i = 0; i <= num; i++) {
    console.log(i)
    if (num % i == 0) {
      console.log("YOU HAVE AN EVEN NUMBER ", i);
    } else {
      console.log('the prime : ', i)
      result += i;
    }
  }
  console.log("THE FINAL RESULT : ", result);
};

sumPrimes(10);
