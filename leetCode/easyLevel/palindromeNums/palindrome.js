
let palindrome = (num) => {

}

var testCaseNumber = 1;

function check(expected, output) {
  console.log("ex:", expected);
  console.log("out: ", output);

  var result = expected == output;

  console.log("my result: ", result);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + testCaseNumber;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + testCaseNumber + ": Expected ";
    out += expected;
    out += " Your output: ";
    out += output;
    console.log(out);
  }
  testCaseNumber++;
}

var int = -123;
var expectedOne = false;
var outputOne = palindrome(int);
check(expectedOne, outputOne);

var int2 = 121;
var expectedTwo = true;
var outputTwo = palindrome(int2);
check(expectedTwo, outputTwo);