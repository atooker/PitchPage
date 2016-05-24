var bg0 = 'bg0';
var bg1 = 'bg1';
var bg2 = 'bg2';

var maxRand = 10;
var numRand = Math.floor(Math.random() * maxRand);
console.log(numRand);
//change class
$('body').addClass('bg' + numRand);
