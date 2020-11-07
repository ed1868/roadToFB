/**
 * @param {number[]} heights
 * @return {number}
 */
heightChecker = (heights) => {
  // CREATE COUNTER TO KEEP TRACK OF EVERY STUDENT THAT MOVES
  let counter = 0;
  // CHECK FOR CONSTRAINTS -- HEIGHTS LENGTH IS LESS THAN 100
  if (heights.length < 100) {
    heights.sort(function (a, b) {
      // HEIGHT ITSELF IS LESS THAN 100
      if (a > 100 || b > 100) {
        return;
      }
      if(a > b){
        counter += 1
      }

      return a-b;
    });

    console.log(counter)
  }
  // SORT THE ARRAY IN INCREASING ORDER WITHOUT MOVING ELEMENTS THAT ARE IN THE RIGHT ORDER
  // FOR EVERY STUDENT THAT MOVES, COUNTER GOES UP
};

heightChecker([1, 1, 4, 2, 1, 3]);
