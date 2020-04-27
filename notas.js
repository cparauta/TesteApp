var selectedPreset = _tone_0120_FluidR3_GM_sf2_file;
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.adjustPreset(audioContext, selectedPreset);

var C = 0, Cs = 1, D = 2, Ds = 3, E = 4, F = 5, Fs = 6, G = 7, Gs = 8, A = 9, As = 10, B = 11;
var O = 12*5 ;
let notes = [G+O, As+O, D+O, F+O,A+O, C+O, Ds+O,];//1;3;5;7;2;4;6//
let pieColors = [0, 30, 60, 90, 120, 150, 180];
//let osc;
//let playing = false;
let song;
let diameter = 300;

function preload() {
    pitch = loadTable('pitch.txt', 'tsv');
    tempo = loadTable('analysis.txt', 'tsv');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  noStroke();
  fullscreen();
  print(pitch.getString(3,0))
  print(tempo.getString(1,0))
}

// extract peaks from the FFT and then create a HPCP

function draw() {
  background(255);
  pieChart(diameter);
}


function pieChart(diameter) {
  let lastAngle = HALF_PI;
  for (let i = 0; i < 7; i++) {
    fill(pieColors[i]);
    arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + TWO_PI / 7);
    lastAngle += TWO_PI / 7;
  }
}

function startWaveTableNow(pitch, duration) {
  var audioBufferSourceNode = player.queueWaveTable(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0, pitch, duration, 0.3)
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
