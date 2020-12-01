fearNotLetter = (str) => {
  let end = str[str.length - 1].charCodeAt(str[str.length - 1]);
  let counter = str[0].charCodeAt(str[0]);
  for (var i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(str[i]) + 1 != counter + 1) {
      let missingChar = str[i].charCodeAt(str[i]);

      let missingLetter = String.fromCharCode(missingChar - 1);

      return missingLetter;
    }
    counter++;
    if (counter == end) {
      return undefined;
    }
  }
};

fearNotLetter("abce");
