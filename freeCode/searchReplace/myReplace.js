function myReplace(str, before, after) {
  let result = [];
  if (str.includes(before)) {
    let strSplit = str.split(" ");
    strSplit.map((word) => {
      if (word == before) {
        if (before[0] === before[0].toUpperCase()) {
          let newAfter = after.charAt(0).toUpperCase() + after.slice(1);
          result.push(newAfter);
        } else {
          result.push(after.toLowerCase());
        }
      } else {
        result.push(word);
      }
    });
  }
  return result.join(" ");
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
