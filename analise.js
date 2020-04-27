//NOTAS//
var C = 0, Cs = 1, D = 2, Ds = 3, E = 4, F = 5, Fs = 6, G = 7, Gs = 8, A = 9, As = 10, B = 11;
var O = 12*5 ;
let notes = [Gs+O, C+O, Ds+O, G+O, As+O, Cs+O, Fs+O];//1;3;5;7;2;4;6//
//var pieColors = [[cor1], [cor2]] ;//Cores estão de preto para cinza [0, 30, 60, 90, 120, 150, 180]
var cor1 =[]
var cor2 = []
var cor3 = []
var cor4 = []
var cor5 = []
var cor6 = []
var cor7 = []

var song;
var button;
//let playing = false;
let diameter = 300;
let table



//Para o webaudiofont funcionar//
var selectedPreset = _tone_0000_SBLive_sf2;
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
//var output = audioContext.destination;
var player = new WebAudioFontPlayer();
//var now = 0;
player.adjustPreset(audioContext, selectedPreset);


//Preload//
function preload() {
    pitch = loadTable('pitch.txt', 'tsv');
    song = loadSound("guitarwithecho.wav");
    table = loadTable('analysis.txt', 'csv');
}



//Setup//
function setup() {
  createCanvas(windowWidth, windowHeight);
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  noStroke();
  fullscreen();
  button = createButton("play");
  button.mousePressed(tooglePlaying)
  // row number

  //cycle through all values in the row -- start in the second
  for (let c = 1; c < table.getColumnCount(); c++) {
    //print(table.getString(r,c)*255);
    //pieColors = table.getString(r,c)*255
    cor1.push(table.getString(0,c)*255)
    //print(cor1)
    cor2.push(table.getString(1,c)*255)
    //print(cor2)
    //print(pieColors[0])
  }
  



  //extrair valores 
  //let row = table.getRow(0);
  //print it column by column
  //note: a row is an object, not an array
  //for (let c = 0; c < table.getColumnCount(); c++) {
    //pieColors = row.getString(c)
   //print(row.getString(c));
    //print(pieColors)

  }

function draw() {
  background(255);
  pieChart(diameter);
}

// Funcao para o webaudiofont //
function startWaveTableNow(pitch, duration) {
  var audioBufferSourceNode = player.queueWaveTable(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0, pitch, duration, 0.3)
}

function tooglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    button.html("stop");  
  } else {
    song.stop();
    button.html("play");
  } 
}

function pieChart(diameter) {
  let lastAngle = HALF_PI;
  for (let i = 0; i < 7; i++) {
    fill(cor1[i]);
    arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + TWO_PI / 7);
    lastAngle += TWO_PI / 7;
  }
}


function mousePressed() {
  // Check if mouse is inside the circle!
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < diameter / 2) {
    //startTime = new Date().getSeconds();
    // Compute which slice was clicked!
    let s = int(map(abs(atan2(mouseX - width / 2, mouseY - height / 2) - TWO_PI) % TWO_PI, 0, TWO_PI, 0, 7));
    //print(s);
    startWaveTableNow(notes[s], 1)
    //print(playing);
  }
}

//function mouseReleased() {
  //endTime = new Date().getSeconds();
  //total = (endTime - (startTime)) * 1000;
  //print("CIMA")
  //let duration = total
  //console.log(total + " Seconds")
//}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = min(width, height);
}
