let notas1 = [];
let notas2 = [];
let notas3 = [];
let notas4 = [];
let notas5 = [];
let notas6 = [];
let notas7 = [];
var cor1 = [], cor2 = [], cor3 = [], cor4 = [], cor5 = [], cor6 = [], cor7 = [], cor8 = [], cor9 = [], cor10 = [], cor11 = [], cor12 = [],cor13 =[]
var song;
var button;
let diameter = 300;

//Para o webaudiofont funcionar//
var selectedPreset = message()
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.adjustPreset(audioContext, selectedPreset);


//Preload//
function preload() {
  // cordas
  cordassong = loadSound("/Sounds/cordas.wav") // Ficheiro áudio
  pitchcordas = loadTable("/Pitch/pitchcordas.txt", "csv") // Pitch
  analisecordas = loadTable("/Analises/analisecordas.txt", "csv") // Análise Tempo / Cores 
}


//Setup//
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  notas1.push(parseInt(pitchcordas.getString(0,0))+(12*5))
  notas2.push(parseInt(pitchcordas.getString(1,0))+(12*5))
  notas3.push(parseInt(pitchcordas.getString(2,0))+(12*5))
  notas4.push(parseInt(pitchcordas.getString(3,0))+(12*5))
  notas5.push(parseInt(pitchcordas.getString(4,0))+(12*5))
  notas6.push(parseInt(pitchcordas.getString(5,0))+(12*5))
  notas7.push(parseInt(pitchcordas.getString(6,0))+(12*5))
  for (let c = 1; c < analisecordas.getColumnCount(); c++) {
    cor1.push(analisecordas.getString(0,c))
    cor2.push(analisecordas.getString(1,c))
    cor3.push(analisecordas.getString(2,c))
    cor4.push(analisecordas.getString(3,c))
    cor5.push(analisecordas.getString(4,c))
    cor6.push(analisecordas.getString(5,c))
    cor7.push(analisecordas.getString(6,c))
    cor8.push(analisecordas.getString(7,c))
    cor9.push(analisecordas.getString(8,c))
    cor10.push(analisecordas.getString(9,c))
    cor11.push(analisecordas.getString(10,c))
    cor12.push(analisecordas.getString(11,c))
    cor13.push(analisecordas.getString(12,c))
  }
}
  
var buttons = document.getElementsByClassName("fas fa-play");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", message);
}

function message(som) {
  var piano = _tone_0000_SBLive_sf2;
  var guitarra = _tone_0240_SBLive_sf2;
  var violino = _tone_0400_SBLive_sf2
  var trompete = _tone_0560_SBLive_sf2;
  var marimba = _tone_0120_SBLive_sf2
  var name = this.name;
  var som = _tone_0000_SBLive_sf2
  if (name == "piano") {
    som = piano
    selectedPreset = som
  } else if (name == "guitarra") {
    som = guitarra
    selectedPreset = som
  } else if (name == "violino") {
    som = violino
    selectedPreset = som
  } else if (name == "trompete") {
    som = trompete
    selectedPreset = som
  } else if (name == "marimba") {
    som = marimba
    selectedPreset = som
  }
  return som
  
}


function draw() {
  background(125,132,154) 
  pieChart(diameter); 
   
}

// Funcao para o webaudiofont //
function startWaveTableNow(pitch) {
  var audioBufferSourceNode = player.queueWaveTable(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0, pitch, 1, 0.3)
}
function pieChart(diameter) {
  let lastAngle = HALF_PI;
  for (let i = 0; i < 7; i++) {
    let from = color(0, 0, 0);
    let to = color(100, 150, 255);
    colorMode(RGB);
    fill(lerpColor(from, to, cor1[i]))
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(0,0)) {
      fill(lerpColor(from, to, cor1[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(1,0)) {
      fill(lerpColor(from, to, cor2[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(2,0)) {
      fill(lerpColor(from, to, cor3[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(3,0)) {
      fill(lerpColor(from, to, cor4[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(4,0)) {
      fill(lerpColor(from, to, cor5[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(5,0)) {
      fill(lerpColor(from, to, cor6[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(6,0)) {
      fill(lerpColor(from, to, cor7[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(7,0)) {
      fill(lerpColor(from, to, cor8[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(8,0)) {
      fill(lerpColor(from, to, cor9[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(9,0)) {
      fill(lerpColor(from, to, cor10[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(10,0)) { 
      fill(lerpColor(from, to, cor11[i]))
    }
    if (Math.floor(audio.currentTime % 60)  >= analisecordas.getString(11,0)) {
      fill(lerpColor(from, to, cor12[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(12,0)) { 
      fill(lerpColor(from, to, cor13[i]))
    }
    arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + TWO_PI / 7);
    lastAngle += TWO_PI / 7;
  }
}


function mousePressed() {
  // Check if mouse is inside the circle!
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < diameter / 2) {
    // Compute which slice was clicked!
    let s = int(map(abs(atan2(mouseX - width / 2, mouseY - height / 2) - TWO_PI) % TWO_PI, 0, TWO_PI, 0, 7));
    if (s == 0) {
      startWaveTableNow(notas1);
    } else if (s == 1) {
      startWaveTableNow(notas2);
    } else if (s == 2) {
      startWaveTableNow(notas3);
    } else if (s == 3) {
      startWaveTableNow(notas4);
    } else if (s == 4) {
      startWaveTableNow(notas5);
    } else if (s == 5) {
      startWaveTableNow(notas6);
    } else if (s == 6) {
      startWaveTableNow(notas7);
    }
  }
}