// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of
// the same value as these arguments.

// Note
// You have to use the arguments object.

destroyer = (arr) => {
  var targets = Array.prototype.slice.call(arguments, 1);
  console.log("THE TARGETS ARE : ", targets);

  arr.filter((elementToDestroy) => {
    for (var i = 0; i < targets.length; i++) {
      console.log(targets[i])
      if (elementToDestroy == targets[i]) {
        console.log("WE FOUND AN INTRUDER");
      } else {
        console.log("CLEAR---- MOVE OUT");
      }
    }
  });
};

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// should return [1, 1].
