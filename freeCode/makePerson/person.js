var Person = function (firstAndLast) {
  // Only change code below this line
  let fullName = firstAndLast;

  // Complete the method below and implement the others similarly
  this.getFullName = () => {
    return fullName;
  };

  this.getFirstName = () => {
    return fullName.split(" ")[0];
  };

  this.getLastName = () => {
    return fullName.split(" ")[1];
  };

  this.setFirstName = (str) => {
    fullName = str + " " + fullName.split(" ")[1];
  };

  this.setLastName = (str) => {
    fullName = fullName.split(" ")[0] + " " + str;
  };

  this.setFullName = (str) => {
    fullName = str;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();
