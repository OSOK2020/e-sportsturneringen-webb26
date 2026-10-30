# API-Fetch-E-sport-tournament
E-Sports Tournament Manager

A JavaScript application for managing players in an e-sports tournament. Players can be added from an external API, moved between teams, and removed from the tournament.

About the Assignment

The HTML and CSS were provided as part of the assignment.

My contribution focused entirely on the JavaScript functionality, including DOM manipulation, event handling, API integration, and team management logic.

Features Implemented
Team Management
Rename Team A and Team B.
Select active team using radio buttons.
Validate team names before updating.
Player Management
Fetch random players from the Random User API.
Add players to Team A or Team B.
Remove players from a team.
Move players between teams.
Allow players to switch teams an unlimited number of times.
Team Rules
Maximum of 5 players per team.
Prevent adding or moving players to a full team.
Display warning messages when a team is full.
Technologies Used
JavaScript (Vanilla JavaScript)
Fetch API
DOM Manipulation
Async/Await
Random User API
API

Player data is retrieved from:

JavaScript
https://randomuser.me/api

Example:

JavaScript
const response = await fetch("https://randomuser.me/api");
const data = await response.json();
JavaScript Concepts Used
DOM Manipulation
JavaScript
querySelector()
createElement()
append()
remove()
textContent
Event Handling
JavaScript
addEventListener()
 
Array Methods
JavaScript
push()
splice()
indexOf()
findIndex()
Async / Await
JavaScript
async
await
fetch()
Dataset Attributes

Each player stores its current team using a dataset property:

JavaScript
li.dataset.team = "A";

This allows every player to keep track of its own team independently.

Challenge and Solution

A challenge was allowing the same player to switch teams multiple times.

Initially, a global variable was used to track the current team, which caused all players to share the same state.

The solution was to store the team information on each player's DOM element:

JavaScript
li.dataset.team = "A";
 

and update it whenever the player changes teams:

JavaScript
li.dataset.team = "B";

This made it possible to move any player between Team A and Team B as many times as needed.

Learning Outcomes

Through this assignment I practiced:

DOM manipulation
Event-driven programming
Fetching data from an external API
Async/Await
Dynamic element creation
Managing application state in JavaScript
Working with arrays and objects
Author

Odia Simon Okhiria

Student in Full Stack Web Development with a focus on JavaScript, web applications, and IT operations. 🚀
