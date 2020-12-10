confirmEnding = (str, target) => {
  let strEnd = str.substring(str.length - target.length);
  console.log(strEnd);
  if (strEnd == target) {
    return true;
  }
  return false;
};

confirmEnding("Bastian", "n");
