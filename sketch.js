var hypnoticBall, database;
var position;
var form , player , game;
var gameState = 0;
var PlayerCount = 0;

function setup(){
database = firebase.database();
console.log(database);
createCanvas(500,500);
}

function draw(){
background("white");
}
