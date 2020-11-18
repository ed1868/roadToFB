let testCaseNumber = 1;

check = (expected, output) => {
  console.log(`Expected : ${expected}`);
  console.log(`Output : ${output}`);

  let result = expected == output;

  console.log(`My Result : ${result}`);

  let rightTick = "\u2713";
  let wrongTick = "\u2717";

  if (result) {
    let out = "";
    out += rightTick + `Test # ${testCaseNumber} `;

    console.log(out);
  } else {
    let out = "";
    out += wrongTick + `Test # ${testCaseNumber} : Expected ${expected}`;
    out += `Your output : ${output}`;
    console.log(out);
  }
  testCaseNumber++;
};

let arrTest1 = [1, 1, 2];
let expectedOne = [1, 2];
let outputOne = removeDuplicates(arrTest1);
check(expectedOne,outputOne);
