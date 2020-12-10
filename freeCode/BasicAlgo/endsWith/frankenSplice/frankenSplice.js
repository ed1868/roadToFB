frankenSplice = (arr1, arr2, n) => {
  let newArr = [...arr2];
  newArr.splice(n, 0, arr1);
  return newArr.flat();
};

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
