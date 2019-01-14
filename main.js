
console.log("Starting program");
var numOfUsers = 10
main();

//constructor function 
function User(name, score, age, ipaddress)
{
  this.userName = name;
  this.userScore = score;
  this.userAge = age;
  this.userIp = ipaddress;

}

User.prototype.display = function() {
  return this.userName + " with the ip address: " + this.userIp 
  + " has a score of: " + this.userScore + "\n";
};



function main()
{
 var firstUser = new User("Jason", 34, 29, "192.168.1.64");
 var display = firstUser.display();
 console.log(display);
}









