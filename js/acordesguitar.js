
var C = 0, Cs = 1, D = 2, Ds = 3, E = 4, F = 5, Fs = 6, G = 7, Gs = 8, A = 9, As = 10, B = 11;
var O = 12;
var _6th = E + O * 3, _5th = A + O * 3, _4th = D + O * 4, _3rd = G + O * 4, _2nd = B + O * 4, _1st = E + O * 5;

			
var fretsAm = [-1, 0, 2, 2, 1, 0];
var fretsC =  [-1, 3, 2, 0, 1, 0];
var fretsE =  [ 0, 2, 2, 1, 0, 0];
var fretsG =  [ 3, 2, 0, 0, 0, 3];
var fretsDm = [-1,-1, 0, 2, 3, 1];

function pitches(frets) {
  var p = [];
  if (frets[0] > -1) p.push(_6th + frets[0]);
  if (frets[1] > -1) p.push(_5th + frets[1]);
  if (frets[2] > -1) p.push(_4th + frets[2]);
  if (frets[3] > -1) p.push(_3rd + frets[3]);
  if (frets[4] > -1) p.push(_2nd + frets[4]);
  if (frets[5] > -1) p.push(_1st + frets[5]);
  return p;
}

let pieColors = [[120,50,220], [10,50,220], [120,50,20], [20,50,20], [10,250,25], [12,5,20], [100,0,0]];
let song;
let diameter = 300;

var selectedPreset = _tone_0240_SBLive_sf2;
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
//var output = audioContext.destination;
var player = new WebAudioFontPlayer();
//var now = 0;
player.adjustPreset(audioContext, selectedPreset);


function setup() {
  createCanvas(windowWidth, windowHeight);
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  noStroke();
  fullscreen();
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
      TOCA(pitches(fretsAm));
    } else if (s == 1) {
      TOCA(pitches(fretsC));
    } else if (s == 2) {
      TOCA(pitches(fretsG));
    } else if (s == 3) {
      TOCA(pitches(fretsDm));
    } else if (s == 4) {
      TOCA(pitches(fretsE));
    } else if (s == 5) {
      TOCA(pitches(fretsD));
    }
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
