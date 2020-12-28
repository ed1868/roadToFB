palindrome = (str) => {
  let regex = str.replace(/[^a-z0-9+]+/gi, "").toLowerCase();

  if (regex == regex.split("").reverse().join("")) {
    return true;
  }
  return false;
};
palindrome("A man, a plan, a canal. Panama");
