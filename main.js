
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
  + " has a score of: " + this.userScore + "\n"); }
  
  //changes users name
  this.setName = function(newName) {
  	this.userName = newName;
  	console.log(this.userName);
  }
}


function main()
{
  var firstUser = new User("Jason", 34, 29, "192.168.1.64");
  firstUser.display();
  firstUser.setName("Ben");

  //


}









