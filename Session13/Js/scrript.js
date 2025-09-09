// var courses = ["html", "css", "bootstrap", "js"];

// var input = prompt("Enter a course name to search:");
// if (!input) {
//   console.log("Please enter course name");
// }
// else {
//   var idx = courses.findIndex((c) => c == input);

//   if (idx != -1) {
//     console.log("found");
//   } else {
//     courses.push(input);
//     console.log("not found, added:", input);
//   }

//   console.log("Current courses:", courses);
// }





///////////////////////////////////////////////////////////////////////////////





// var people = [
//     {
//     firstname: "Shahd",
//     age: 21,
//     city: "Cairo"
// },
//     {
//     firstname: "Omar",
//     age: 25,
//     city: "Alexandria"
// },
//     {
//     firstname: "Mona",
//     age: 20,
//     city: "Giza"
//     },
// ]

// var person = people.findIndex((p) => p.age == 25);

// if (person) {
//   console.log(person);
// } else {
//   console.log("Not found");
// }




// ////////////////////////////////////////////////////////////////////////////





var users = [];

function addUser(UesrName, UserId, UserBalance) {
  users.push({ UesrName, UserId, UserBalance });
}


function editUserBalanceById() {
  var id = prompt("Enter the ID of the user you want to edit:");
  var user = users.find((u) => u.UserId == id);

  if (user) {
    var newBalance = prompt("Enter the new balance:");
    user.UserBalance = newBalance;
    console.log(`Balance updated for user with id ${id}`);
  } else {
    console.log("User not found!");
  }
}

function deleteUserById() {
  var id = prompt("Enter the ID of the user you want to delete:");
  users = users.filter((u) => u.UserId != id);
  console.log(`User with id ${id} deleted (if existed).`);
}

var numberOfUsers = parseInt(prompt("Enter number of users:"));

for (var i = 1; i <= numberOfUsers; i++) {
  var Uname = prompt(`Enter name of user ${i}:`);
  var Uid = prompt(`Enter id of user ${i}:`);
  var Ubalance = prompt(`Enter balance of user ${i}:`);

  addUser(Uname, Uid, Ubalance);
}

console.log("All Users before edit/delete:", users);

editUserBalanceById();
deleteUserById();

console.log("All Users after edit/delete:", users);
