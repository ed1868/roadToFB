let testCaseNumber = 1;

check = (expected, output) => {
  let result = expected == output;

  console.log("My Result: ", result);

  let rightTick = "\u2713";
  let wrongTick = "\u2717";
  if (result) {
    let out = "";
    out += wrongTick + "TEST #" + testCaseNumber + ": Expected ";
    out += expected;
    out += ` YOUR OUTPUT : ${output}`;
    console.log(out);
  }
  testCaseNumber++;
};
