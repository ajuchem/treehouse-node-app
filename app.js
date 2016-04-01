// Problem: Simple way to look at user's badge count and JS points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");
var username = "alessandradaudt";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}

// Connect to the API URL (http://teamtreehouse.com/username.json)
var req = http.get("http://teamtreehouse.com/" + username + ".json", function(res) {
  console.log(res.statusCode);
  // Read the data
  // Parse the data
  // Print the data
});

req.on("error", function(error) {
  console.error(error.message);
})

printMessage("Allie", 100, 5656);
