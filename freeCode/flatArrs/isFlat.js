// Flatten a nested array. You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

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
  };

  arr.map((element) => {
    isFlat(element);
  });
  console.log(result);
  return result;
};

steamrollArray([1, [2], [3, [[4]]]]);
