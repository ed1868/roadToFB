var twoSum = (nums,target) => {
  // MAKE A RESULT ARRAY
    let result = Array;
  // LOOP NUMS ARRAY AND CHECK IF THAT GIVEN NUMBER CAN BE ADDED WITH ANY OTHER IN THAT ARRAY TO EQUAL THE TARGET TOTAL

  //  GET THE INDEX OF THE TWO NUMBERS IN THAT ARRAY THAT CAN BE ADDED 

  // RETURN AN ARRAY WITH ONLY TWO INDECES WHICH ARE THE ONES WE GOT FROM STEP 2



};

// TEST CASES FOR PROBLEM

function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printString(expected);
    out += " Your output: ";
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var arrOne = [1, 2, 3, 4];
var targetOne = [1, 4, 3, 2];
var expectedOne = [0, 1];
var outputOne = twoSum(arrOne, targetOne);
check(expectedOne, outputOne);
