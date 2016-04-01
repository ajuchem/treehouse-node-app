// Problem: Simple way to look at user's badge count and JS points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require("https");
var username = "alessandradaudt";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}

// Connect to the API URL (http://teamtreehouse.com/username.json)
var req = https.get("https://teamtreehouse.com/" + username + ".json", function(res) {
  var body = "";
  // Read the data
  res.on('data', function(chunk) {
    body += chunk;
  })
  res.on('end', function() {
    console.log(body);
  })
  // Parse the data
  // Print the data
});

req.on("error", function(error) {
  console.error(error.message);
})

printMessage("Allie", 100, 5656);
