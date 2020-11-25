diffArray = (arr1, arr2) => {
  let resultArr = [];

  arr1.map((element) => {
    if (!arr2.includes(element)) {
      resultArr.push(element);
    }
  });

  arr2.map((element) => {
    if (!arr1.includes(element)) {
      resultArr.push(element);
    }
  });
  console.log("THE RESULTS ARRAY IS : ", resultArr);
  return resultArr;
};

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

let testCaseNumber = 1;

let check = (expected, output) => {
  console.log(`EX: ${expected}`);
  console.log(`OUT: ${output}`);

  let result = expected == output;
  let rightTick = "\u2713";
  let wrongTick = "\u2717";
  if (result) {
        let out = `${rightTick}   Test #  ${testCaseNumber}`;
        console.log(out);
  }else{
    let out = `${wrongTick} Test # ${testCaseNumber} : EXPECTED : ${expected}, Youre OUTPUT: ${output}`;
    console.log(out)
  }
  testCaseNumber++
};


var arr1 =  ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
var arr2= ["diorite", "andesite", "grass", "dirt", "dead shrub"];
var expectedOne = ['pink wool','diorite'];
var outputOne = diffArray(arr1,arr2);
check(expectedOne, outputOne);
