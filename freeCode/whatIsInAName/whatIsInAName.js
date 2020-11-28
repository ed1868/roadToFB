whatIsInAName = (collection, source) => {
  var arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source);
  console.log("the amount of items in the source keys: ", sourceKeys);
  collection.filter((element) => {
    for (var i = 0; i < sourceKeys.length; i++) {
      if(!element.hasOwnProperty(sourceKeys[i]) || element[sourceKeys[i]] != source[sourceKeys[i]]){
        return false;
      }
    }

    return true
  });

  // Only change code above this line
  return arr;
};

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
