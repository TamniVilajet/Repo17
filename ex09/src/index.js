// Only change code below this line
    // users nested array with four objects starts here
    const users = [
        {id: 1, firstName: 'John', lastName: 'Doe', age: 24, gender: 'male'},
        {id: 2, firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female'},
        {id: 3, firstName: 'Jim',  lastName: 'Carrey', age: 54, gender: 'male'},
        {id: 4, firstName: 'Kate', lastName: 'Winslet', age: 40, gender: 'female'}
      ];
    // users nested array with four objects ends here
    // getUsers function - list of users starts here
      function getUsers() {
          var output = "";
          for(var i = 0; i<users.length; i++) {
            output = console.log(`${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`);
          }
          return output;
      }
    // getUsers function - list of users ends here
    //findUser(id) function starts here
    function findUserById(id) {
        var user;
        try {
        for(var i = 0; i<users.length; i++) {
            if(users[i]['id'] === id) {
            user = users[i];
            var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
            }
        }
        return iFindUser;
    }
        catch(error) {
            console.log("Cannot read property 'firstName' of undefined");
        }
    }

    // findUserByID(id) function ends here
// Only change code above this line
getUsers(users);
console.log(findUserById(4)); // Change this line

module.exports = findUserById;