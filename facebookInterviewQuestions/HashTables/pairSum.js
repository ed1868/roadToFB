// HASH TABLE

let hash = (string, max) => {
  let hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  // console.log("THE HASH:", hash);
  return hash % max;
};

let HashTable = function () {
  let storage = [];
  const storageLimit = 100;

  //PRINT STORAGE
  this.print = () => {
    console.log(storage);
  };

  //ADDS A HASH KEY AND VALUE
  this.add = (key, value) => {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] += value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  //LOOK UP HAS VALUES
  this.lookup = (key) => {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

// arr = [1, 5, 3, 3, 3]
// n = 5
// k = 6
// output = 4
numberOfWays = (arr, k) => {
  let ht = new HashTable();
  let counter = 0;
  arr.map((num) => {
    ht.add(num, 1);
  });

  // let newArr = [...new Set(arr)];

  // console.log("NEW ARRAY : ", newArr);

  for (var i = 0; i < arr.length; i++) {
    let key = arr[i];
    console.log("EY :", key);
    counter += ht.lookup(key);
  }

  
};

numberOfWays([1, 5, 3, 3, 3], 6);
// console.log(hash("hello",10))

// ht.add("hi","yo");

// ht.add("bye","dude");

// console.log(`LOOKING UP HI: ${ht.lookup("hi")}`);

// ht.print();
