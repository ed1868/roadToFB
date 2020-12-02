// Write a function that takes two or more arrays and returns 
// a new array of unique values in the order of the original provided arrays.
uniteUnique = (arr) => {
  //MAKE A RESULT ARRAY
  let result = [];
  //FIND OUT THE AMOUNT OF PARAMETERS
  console.log(`There are ${arguments.length} parameters`);
  let arrs = Object.values(arguments);
  //LOOP THROUGH PARAMETERS
  arrs.map((arr) => {
    console.log(`CURRENT ARRAY : ${arr}`);
    //IF FIRST ITERATION, LET THE FIRST ARRAY BE PUSHED TO RESULT
    if (result.length < 1) {
      return result.push(arr);
    }
    console.log("The result", result);
    //FIND ONLY UNIQUE VALUES AND PUSH THEM TO RESULT ARRAY
    for (var i = 0; i < arr.length; i++) {
      if (result[0].includes(arr[i])) {
        console.log("This is a duplicate");
      } else {
        result[0].push(arr[i]);
      }
    }
  });
  //RETURN RESULT ARRAY
  return result[0];
};

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//OPTIMIZED

// function uniteUnique(...arrays) {
//   //make an array out of the given arrays and flatten it (using the spread operator)
//   const flatArray = [].concat(...arrays);

//   // create a Set which clears any duplicates since it's a regular set and not a multiset
//   return [...new Set(flatArray)];
// }
