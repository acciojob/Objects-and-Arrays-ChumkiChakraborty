const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
const team = players; // Create a reference to the 'players' array
const team1 = players.slice(); //Create a copy of the 'players' array
const cap1 = { ...person }; // Create a copy of the 'person' object
console.log("team:", team);
    console.log("team1:", team1);
    console.log("cap1:", cap1);
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
