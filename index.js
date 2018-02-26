// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
//var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [
  {
    name: "Yoda",
    phone_number: 5555555555,
    email: "JediMaster@gmail.com",
    id: "Yoda"
  }
];

var waitingList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index_html.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "table_html.html"));
});

app.get("/api/:reservations?", function(req, res) {
  return res.json(reservations);
});

// Get all characters
// app.get("/tables", function(req, res) {
//   res.json(reservations, waitingList);
// });

app.post("/api/new", function(req, res) {

  if (reservations.length < 2) {

    var newReservation = req.body;

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);

    console.log(reservations)
  } else {

    var newReservation = req.body;

    console.log(newReservation);

    waitingList.push(newReservation);

    res.json(waitingList);

    console.log(waitingList)
  }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
