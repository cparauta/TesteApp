let notas1 = [];
let notas2 = [];
let notas3 = [];
let notas4 = [];
let notas5 = [];
let notas6 = [];
let notas7 = [];
var cor1 = [], cor2 = [], cor3 = [], cor4 = [], cor5 = [], cor6 = [], cor7 = [], cor8 = [], cor9 = [], cor10 = [], cor11 = [], cor12 = [],cor13 =[],
cor14 =[],cor15 =[],cor16 =[],cor17 =[],cor18 =[],cor19 =[],cor20 =[],cor21 =[],cor22 =[],cor23 =[],cor24 =[]
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
    // Harpa
    cravosong = loadSound("/Sounds/harpsichord.wav")
    pitchcravo2 = loadTable("/Pitch/pitchcravo2.txt", "csv")
    analisecravo = loadTable("/Analises/analisecravo.txt", "csv")
    
  }
  


//Setup//
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  notas1.push(parseInt(pitchcravo2.getString(0,0))+(12*5))
  notas1.push(parseInt(pitchcravo2.getString(0,1))+(12*5))

  notas2.push(parseInt(pitchcravo2.getString(1,0))+(12*5))
  notas2.push(parseInt(pitchcravo2.getString(1,1))+(12*5))

  notas3.push(parseInt(pitchcravo2.getString(2,0))+(12*5))
  notas3.push(parseInt(pitchcravo2.getString(2,1))+(12*5))

  notas4.push(parseInt(pitchcravo2.getString(3,0))+(12*5))
  notas4.push(parseInt(pitchcravo2.getString(3,1))+(12*5))

  notas5.push(parseInt(pitchcravo2.getString(4,0))+(12*5))
  notas5.push(parseInt(pitchcravo2.getString(4,1))+(12*5))

  notas6.push(parseInt(pitchcravo2.getString(5,0))+(12*5))
  notas6.push(parseInt(pitchcravo2.getString(5,1))+(12*5))

  notas7.push(parseInt(pitchcravo2.getString(6,0))+(12*5))
  notas7.push(parseInt(pitchcravo2.getString(6,1))+(12*5))

  for (let c = 1; c < analisecravo.getColumnCount(); c++) {
    cor1.push(analisecravo.getString(0,c))
    cor2.push(analisecravo.getString(1,c))
    cor3.push(analisecravo.getString(2,c))
    cor4.push(analisecravo.getString(3,c))
    cor5.push(analisecravo.getString(4,c))
    cor6.push(analisecravo.getString(5,c))
    cor7.push(analisecravo.getString(6,c))
    cor8.push(analisecravo.getString(7,c))
    cor9.push(analisecravo.getString(8,c))
    cor10.push(analisecravo.getString(9,c))
    cor11.push(analisecravo.getString(10,c))
    cor12.push(analisecravo.getString(11,c))
    cor13.push(analisecravo.getString(12,c))
    cor14.push(analisecravo.getString(13,c))
    cor15.push(analisecravo.getString(14,c))
    cor16.push(analisecravo.getString(15,c))
    cor17.push(analisecravo.getString(16,c))
    cor18.push(analisecravo.getString(17,c))
    cor19.push(analisecravo.getString(18,c))
    cor20.push(analisecravo.getString(19,c))
    cor21.push(analisecravo.getString(20,c))
    cor22.push(analisecravo.getString(21,c))
    cor23.push(analisecravo.getString(22,c))
    cor24.push(analisecravo.getString(23,c))
}
document.getElementById("audio").volume = 0.5; 

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
  var audioBufferSourceNode = player.queueChord(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0, pitch, 1, 0.3)
}
function pieChart(diameter) {
  let lastAngle = HALF_PI;
  for (let i = 0; i < 7; i++) {
    let from = color(0, 0, 0);
    let to = color(100, 150, 255);
    colorMode(RGB);
    fill(lerpColor(from, to, cor1[i]))
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(0,0)) {
        fill(lerpColor(from, to, cor1[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(1,0)) {
        fill(lerpColor(from, to, cor2[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(2,0)) {
        fill(lerpColor(from, to, cor3[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(3,0)) {
        fill(lerpColor(from, to, cor4[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(4,0)) {
        fill(lerpColor(from, to, cor5[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(5,0)) {
        fill(lerpColor(from, to, cor6[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(6,0)) {
        fill(lerpColor(from, to, cor7[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(7,0)) {
        fill(lerpColor(from, to, cor8[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(8,0)) {
        fill(lerpColor(from, to, cor9[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(9,0)) {
        fill(lerpColor(from, to, cor10[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(10,0)) { 
        fill(lerpColor(from, to, cor11[i]))
    }
    if (Math.floor(audio.currentTime % 60)  >= analisecravo.getString(11,0)) {
        fill(lerpColor(from, to, cor12[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(12,0)) { 
        fill(lerpColor(from, to, cor13[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(13,0)) {
        fill(lerpColor(from, to, cor14[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(14,0)) { 
        fill(lerpColor(from, to, cor15[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(15,0)) { 
        fill(lerpColor(from, to, cor16[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(16,0)) { 
        fill(lerpColor(from, to, cor17[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(17,0)) { 
        fill(lerpColor(from, to, cor18[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(18,0)) { 
        fill(lerpColor(from, to, cor19[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(19,0)) { 
        fill(lerpColor(from, to, cor20[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(20,0)) { 
        fill(lerpColor(from, to, cor21[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(21,0)) { 
        fill(lerpColor(from, to, cor22[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(22,0)) { 
        fill(lerpColor(from, to, cor23[i]))
    }
    if (Math.floor(audio.currentTime % 60) >= analisecravo.getString(23,0)) { 
        fill(lerpColor(from, to, cor24[i]))
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