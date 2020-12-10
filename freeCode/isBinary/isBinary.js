binaryAgent = (str) => {
  //MAKE RESULT ARRAY
  let result = [];
  //SPLIT THE ARRAY BY SPACES
  let binaryArr = str.split(" ");
  console.log(`BINARY ARRAY : ${binaryArr}`);
  //LOOP THROUGH EACH BINARY SET
  binaryArr.map((binarySet) => {
    console.log(`CURRENT BINARY SET : ${binarySet}`);

    let isCaps = (str) => {
      if (str == "010") {
        return true;
      }
      return false;
    };
    //TURN BINARY SET INTO DECIMAL

    let letterNum = parseInt(binarySet, 2);
    console.log(`BINARY TO DECIMAL : ${letterNum}`);

    //USE STRING.FROMCHARCODE TO GET THE LETTER
    let letter = String.fromCharCode(letterNum);

    console.log(`DECIMAL TO LETTER : ${letter}`);

    //FIGURE OUT IF FIRST 3 NUMS MAKE IT UPPERCASE OR LOWERCASE
    let upperCase = binarySet.substring(0, 3);

    if (isCaps(upperCase)) {
      // PUSH UPPERCASE LETTER TO RESULTS ARRAY
      result.push(letter.toUpperCase());
    } else {
      // PUSH LETTER TO RESULTS ARRAY
      result.push(letter);
    }
  });

  //BONUS : USE RECURSION
  console.log("THE FINAL RESULT : ", result.join(""));
  return result.join("");
};

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
