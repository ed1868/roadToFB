findElement = (arr, func) => {
  let correctAnswers = [];
  arr.map((element) => {
    if (func(element)) {
      correctAnswers.push(element);
    }
  });
  if (correctAnswers.length < 1) {
    return undefined;
  }
  return correctAnswers[0];
};

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
