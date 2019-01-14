
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

  //display user information
  this.display = function() {
  console.log(this.userName + " with the ip address: " + this.userIp 
  + " has a score of: " + this.userScore + " And age " + this.userAge + "\n"); }
  
  //changes users name
  this.setName = function(newName) {
  	this.userName = newName;
  	//console.log(this.userName);
  }

//testing prototype
  User.prototype.checkAge = function(newName) {
  	console.log(this.userAge);
  	if(this.userAge >= 18)
  		console.log("User is an adult");
  	else
  		console.log("User must have permission");
  }  
}



function main()
{
  var firstUser = new User("Jason", 34, 29, "192.168.1.64");
  firstUser.display();
  firstUser.setName("Ben");

  
  firstUser.checkAge();

}









