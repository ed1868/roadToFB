// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase = (str) => {
  // Create a variable for the white space and underscores.
  let regex = /\s+|_+/g;
  // Replace the camelCases by spaces
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Replace space and underscores with -
  return newStr.replace(regex, "-").toLowerCase();
};

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
