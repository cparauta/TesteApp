
var C = 0, Cs = 1, D = 2, Ds = 3, E = 4, F = 5, Fs = 6, G = 7, Gs = 8, A = 9, As = 10, B = 11;
var O = 12;


let notas1 = [];
let notas2 = [];
let notas3 = [];
let notas4 = [];
let notas5 = [];
let notas6 = [];
let notas7 = [];

let pieColors = [[120,50,220], [10,50,220], [120,50,20], [20,50,20], [10,250,25], [12,5,20], [100,0,0]];
let song;
let diameter = 300;

var selectedPreset =  _tone_0000_SBLive_sf2;
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
//var output = audioContext.destination;
var player = new WebAudioFontPlayer();
//var now = 0;
player.adjustPreset(audioContext, selectedPreset);

function preload() {
    // cordas
    cordassong = loadSound("/cordas.wav") // Ficheiro áudio
    pitchcordas = loadTable("/pitchcordas.txt", "csv") // Pitch
    analisecordas = loadTable("/analisecordas.txt", "csv") // Análise Tempo / Cores
    
  }
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  noStroke();
  fullscreen();
  notas1.push(parseInt(pitchcordas.getString(0,0))+(12*5))
  notas2.push(parseInt(pitchcordas.getString(1,0))+(12*5))
  notas3.push(parseInt(pitchcordas.getString(3,0))+(12*5))
  notas4.push(parseInt(pitchcordas.getString(3,0))+(12*5))
  notas5.push(parseInt(pitchcordas.getString(3,0))+(12*5))
  notas6.push(parseInt(pitchcordas.getString(2,0))+(12*5))
  notas7.push(parseInt(pitchcordas.getString(4,0))+(12*5))
  print(notas2) 
}

// extract peaks from the FFT and then create a HPCP  

function draw() {
  background(255);
  pieChart(diameter);
}

function TOCA(pitches) {
  var audioBufferSourceNode = player.queueChord(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0, pitches, 1, 1)
}
function pieChart(diameter) {
  let lastAngle = HALF_PI;
  for (let i = 0; i < 7; i++) {
    fill(pieColors[i]);
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
    print(s);
    if (s == 0) {
        TOCA(notas1);
      } else if (s == 1) {
        TOCA(notas2);
      } else if (s == 2) {
        TOCA(notas3);
      } else if (s == 3) {
        TOCA(notas4);
      } else if (s == 4) {
        TOCA(notas5);
      } else if (s == 5) {
        TOCA(notas6);
      } else if (s == 6) {
        TOCA(notas7);
      }
  }
}

function mouseReleased() {
  //endTime = new Date().getSeconds();
  //total = (endTime - (startTime)) * 1000;
  //print("CIMA")
  //let duration = total
  //console.log(total + " Seconds")
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = min(width, height);
}
