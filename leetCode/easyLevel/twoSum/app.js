// var twoSum = (nums, target) => {
//   // MAKE A RESULT ARRAY
//   let result = [];
//   // LOOP NUMS ARRAY AND CHECK IF THAT GIVEN NUMBER CAN BE ADDED WITH ANY OTHER IN THAT ARRAY TO EQUAL THE TARGET TOTAL
//   for (var i = 0; i < nums.length; i++) {
//     //  GET THE INDEX OF THE TWO NUMBERS IN THAT ARRAY THAT CAN BE ADDED

//     for (var a = 0; a < nums.length; a++) {
//       if (nums[i] + nums[a] == target) {

//         console.log(`${nums.indexOf(nums[i])} + ${nums.indexOf(nums[a])}`)
//         if (result.length < 2) {
//           let indexOne = nums.indexOf(nums[i]);
//           let indexTwo = nums.indexOf(nums[a]);
//           if (indexOne == indexTwo) {
//             indexTwo += 1;
//           }
//           result.push(indexOne);
//           result.push(indexTwo);
//         }
//       }
//     }
//   }
//   // RETURN AN ARRAY WITH ONLY TWO INDECES WHICH ARE THE ONES WE GOT FROM STEP 2
//   return result;
// };
//BRUTE FORCE SOLUTION

var twoSum = function (nums, target) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};


// TEST CASES FOR PROBLEM

function printString(str) {
  console.log(typeof(str))
  var out = '["' + str + '"]';
  return Array(out);
}

var testCaseNumber = 1;

function check(expected, output) {
  console.log('ex:',  expected);
  console.log('out: ', output);

  var result = expected == output;

  console.log('my result: ', result)
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + testCaseNumber;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + testCaseNumber + ": Expected ";
    out += printString(expected);
    out += " Your output: ";
    out += printString(output);
    console.log(out);
  }
  testCaseNumber++;
}

var arrOne = [2,7,11,15];
var targetOne = 9;
var expectedOne = [0,1];
var outputOne = twoSum(arrOne, targetOne);
check(expectedOne, outputOne);

var arrTwo = [3,2,4];
var targetTwo = 6;
var expectedTwo = [1,2];
var outputTwo = twoSum(arrTwo, targetTwo);
check(expectedTwo, outputTwo);

var arrThree = [3,3];
var targetThree = 6;
var expectedThree = [0,1];
var outputThree = twoSum(arrThree, targetThree);
check(expectedThree, outputThree);

var arrFour = [3, 2,3];
var targetFour = 6;
var expectedFour = [0,2];
var outputFour = twoSum(arrFour, targetFour);
check(expectedFour, outputFour);
