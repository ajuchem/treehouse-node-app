// Problem: Simple way to look at user's badge count and JS points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require("https");
var http = require("http");
var username = "chalkers1234";

// Print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}

// Print out error messages
function printError(error) {
  console.error(error.message);
}


// Connect to the API URL (http://teamtreehouse.com/username.json)
var req = https.get("https://teamtreehouse.com/" + username + ".json", function(res) {
  var body = "";
  // Read the data
  res.on('data', function(chunk) {
    body += chunk;
  })
  res.on('end', function() {
    if (res.statusCode === 200) {
      try {
        var profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
      } catch(error) {
        // Parse error
        printError(error);
      }
    } else {
      // Status code error
      printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[res.statusCode] +")"});
    }

  })
  // Parse the data
  // Print the data
});

// Connection error
req.on("error", printError);
