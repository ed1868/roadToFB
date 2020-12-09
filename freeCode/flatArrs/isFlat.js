steamrollArray = (arr) => {
  let result = [];


  let isFlat = (arr) => {
    console.log("ARR : ", arr);
    if (!Array.isArray(arr)) {
      result.push(arr);
    } else {
      arr.map((recursiveArr) => {
        isFlat(recursiveArr);
      });
    }
  

    arr.forEach(element => {
      isFlat(element);
    });
    return result;
  };



  arr.map((array) => {
    if (!Array.isArray(array)) {
      result.push(array);
    } else {
      result.push(isFlat(array));
    }
    // call the function for each element in the array
    // console.log(isFlat(array));
    // result.push()
  });
console.log('THE SOLUTION : ', result)
  // return result;
  // return result
};

//create function that adds an element if it is not an array
let isFlat = (arr) => {
  let result = [];
  console.log("ARR : ", arr);

  if (!Array.isArray(arr)) {
    result.push(arr);
  } else {
    arr.map((recursiveArr) => {
      isFlat(recursiveArr);
    });
  }

  return result;
};
steamrollArray([1, [2], [3, [[4]]]]);
