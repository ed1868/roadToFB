pairElement = (str) => {
  //BASE PAIRS
  let basePairs = [
    ["A", "T"],
    ["G", "C"],
    ["T", "A"],
    ["C", "G"],
  ];
  let result = [];
  // SPLIT THE STRING AND LOOP THROUGH THE CHARACTER
  let arr = str.split("");
  arr.map((letter) => {
    //LOOP THROUGH BASE PAIRS
    for (var i = 0; i < basePairs.length; i++) {
      // IF THE FIRST CHARACTER OF THE BASE PAIR IS EQUAL TO THE LETTER, PUSH THE WHOLE BASE PAIR INTO RESULTS ARRAY
      if (basePairs[i][0] == letter) {
        result.push(basePairs[i]);
      }
    }
  });
  // RETURN RESULT
  return result;
};

//OPTOMIZED
// pairElement = (str) => {
//   let basePairs = [
//     ["A", "T"],
//     ["G", "C"],
//     ["T", "A"],
//     ["C", "G"],
//   ];

//   let arr = str.split("");

//   return arr.map((x) => [x, pairs[x]]);
// };

pairElement("GCG");
