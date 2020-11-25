/**
 * @param {string} s
 * @return {number}
 */
let maxScore = s => {

  let left = [];
  let right = [];

};

let testCaseNumber = 1;

let check = (expected, output) => {
  console.log(`EX: ${expected}`);
  console.log(`OUT: ${output}`);

  // RESULT WILL EITHER BE TRUE OR FALSE
  let result = expected == output;
  console.log(`My Result: ${result}`);

  let rightTick = "\u2713";
  let wrongTick = "\u2717";
  if (result) {
    let out = `${rightTick} Test # ${testCaseNumber}`;
    console.log(out);
  } else {
    let out = "";
    out = `${wrongTick} Test # ${testCaseNumber} : Expected ${expected}. Your output : ${output}`;
  }
  testCaseNumber++;
};

let str = "00111";
let expectedOne = 5;
let outputOne = maxScore(str);
check(expectedOne, outputOne);
