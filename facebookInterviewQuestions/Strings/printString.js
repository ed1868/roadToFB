function rotationalCipher(input, rotationFactor) {
  // Write your code here
  let regex = /\W|_/g;

  let strToArray = input.split("");

  let result = [];

  strToArray.map((letter) => {
    console.log("CURRENT LETTER: ", letter);

    if (regex.test(letter)) {
      return result.push(letter);
    }
    if (Number(letter)) {
      if (Number(letter) >= 9) {
        let gearChange = -1;
        let num = gearChange + rotationFactor;

        result.push(num);
      } else {
        let num = Number(letter) + rotationFactor;

        result.push(num);
      }
    }

    console.log("CURRENT LETTER CHAR CODE : ", letter.charCodeAt(letter));

    if(letter.charCodeAt(letter) + rotationFactor >= 90  && letter.toUpperCase() === letter){
      let newLetter = letter.charCodeAt(letter) + rotationFactor - 89 ;

      console.log('the new letter: ', newLetter)

      let fuse = String.fromCharCode(97 + newLetter)
      // let newChange = letter.toLowerCase();
      // if(newChange.charCodeAt(newChange) >= rotationFactor){
      //   let gearChange = 97;
      //   let fuse = gearChange + rotationFactor;
        result.push(fuse)
      // } 
    }
    let rotation = letter.charCodeAt(letter) + rotationFactor;
    console.log("CURRENT LETTER CHAR CODE WITH ROTATION : ", rotation);
    //console.log(`the letter we are testing is: ${letter} and it char code is : ${letter.charCodeAt(rotation)}, we need it to be at ${letter.charAt}`)
  

    let newLetter = String.fromCharCode(rotation);
    console.log("SHUT : ", newLetter);
    result.push(newLetter);
    //const index = 4;

    //console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
    // expected output: "The character code 113 is equal to q"
  });

  //console.log(indexOf(regex.test(input)));
  console.log("the result is: ", result);
  return result.join("");
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
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
// -9-be:Alert1.
// -3-fi:Epivx5.
var input_1 = "All-convoYs";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

// var input_2 = "abcdZXYzxy-999.@";
// var rotationFactor_2 = 200;
// var expected_2 = "stuvRPQrpq-999.@";
// var output_2 = rotationalCipher(input_2, rotationFactor_2);
// check(expected_2, output_2);
