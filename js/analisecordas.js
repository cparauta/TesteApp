//NOTAS//
//var C = 0+12*5, Cs = 1+12*5, D = 2+12*5, Ds = 3+12*5, E = 4+12*5, F = 5+12*5, Fs = 6+12*5, G = 7+12*5, Gs = 8+12*5, A = 9+12*5, As = 10+12*5, B = 11+12*5;
//var O = 12*5 ;

let notes = [];//1;3;5;7;2;4;6//
//var pieColors = [[cor1], [cor2]] ;//Cores estão de preto para cinza [0, 30, 60, 90, 120, 150, 180]
var cor =[0, 30, 60, 90, 120, 150, 180]
var cor1 = [], cor2 = [], cor3 = [], cor4 = [], cor5 = [], cor6 = [], cor7 = [], cor8 = [], cor9 = [], cor10 = [], cor11 = [], cor12 = [],cor13 =[]
var song;
var button;
//let playing = false;
let diameter = 300;
/*let table
//let harpasong
//let harpsichord
//let pitcharpa
var valor13 
var valor14
var valor15
var valor16
var valor17
var valor18
var valor19
var valor20

intrumento e notas*/
/*var sons 
var piano = document.getElementById("piano")
var guitarra = document.getElementById("guita")
var button = document.getElementById("toque")
button.onClick = function(){
  if(piano.value =="1" ){
    piano = _tone_0000_SBLive_sf2
    sons = piano
    console.log( piano)
    return sons
  }
  else if(guitarra.value == "2" ){
    guitarra = _tone_0000_SBLive_sf2
    sons = guitarra
    return sons
  }
}
console.log( sons)
*/

var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", message);
}

function message(som) {
  var piano = _tone_0000_SBLive_sf2
  var guitar = _tone_0240_SBLive_sf2
  var name = this.name;
  if (name == "piano") {
    som = piano
    return som
    //alert("Piano");
  } else if (name == "guitar") {
    som = guitar
    //alert("Guitarra");
  }
}


//Para o webaudiofont funcionar//
 //input tilizador
var selectedPreset = message()
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
//var output = audioContext.destination;
var player = new WebAudioFontPlayer();
//var now = 0;
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
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  noStroke();
  //fullscreen();
  // row number
  //let r = 0
  //cycle through all values in the row -- start in the second
  notes.push(parseInt(pitchcordas.getString(0,0))+(12*5))
  notes.push(parseInt(pitchcordas.getString(1,0))+(12*5))
  notes.push(parseInt(pitchcordas.getString(2,0))+(12*5))
  notes.push(parseInt(pitchcordas.getString(3,0))+(12*5))
  notes.push(parseInt(pitchcordas.getString(4,0))+(12*5))
  notes.push(parseInt(pitchcordas.getString(5,0))+(12*5))
  notes.push(parseInt(pitchcordas.getString(6,0))+(12*5))
  //print(notes)
  for (let c = 1; c < analisecordas.getColumnCount(); c++) {
    cor1.push(analisecordas.getString(0,c)*255)
    cor2.push(analisecordas.getString(1,c)*255)
    cor3.push(analisecordas.getString(2,c)*255)
    cor4.push(analisecordas.getString(3,c)*255)
    cor5.push(analisecordas.getString(4,c)*255)
    cor6.push(analisecordas.getString(5,c)*255)
    cor7.push(analisecordas.getString(6,c)*255)
    cor8.push(analisecordas.getString(7,c)*255)
    cor9.push(analisecordas.getString(8,c)*255)
    cor10.push(analisecordas.getString(9,c)*255)
    cor11.push(analisecordas.getString(10,c)*255)
    cor12.push(analisecordas.getString(11,c)*255)
    cor13.push(analisecordas.getString(12,c)*255)
    

  var update = setInterval(function() {
    var mins = Math.floor(audio.currentTime / 60);
    var secs = Math.floor(audio.currentTime % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }
  }, 10);

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
  background(152,180,212);
  pieChart(diameter);
}

// Funcao para o webaudiofont //
function startWaveTableNow(pitch, duration) {
  var audioBufferSourceNode = player.queueWaveTable(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0, pitch, duration, 0.3)
}
function pieChart(diameter) {
  let lastAngle = HALF_PI;
  for (let i = 0; i < 7; i++) {
  fill(cor1[i])
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(0,0)) {
      fill(cor1[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(1,0) ) {
      fill(cor2[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(2,0)) {
      fill(cor3[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(3,0)) {
      fill(cor4[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(4,0)) {
      fill(cor5[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(5,0)) {
      fill(cor6[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(6,0)) {
      fill(cor7[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(7,0)) {
      fill(cor8[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(8,0)) {
      fill(cor9[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(9,0)) {
      fill(cor10[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(10,0)) { //0 que é 1 
      fill(cor11[i])
    }
    if (Math.floor(audio.currentTime % 60)  >= analisecordas.getString(11,0)) {//1 que é 2
      fill(cor12[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(12,0)) { //2 que é 3
      fill(cor13[i])
    }
    
    /*if (Math.floor(audio.currentTime % 60) >= parseFloat(analisecordas.getString(12,0)) + (parseFloat((analisecordas.getString(3,0)) - parseFloat((analisecordas.getString(2,0))))))  {
      valor13 = (parseFloat(analisecordas.getString(12,0))) + (parseFloat((analisecordas.getString(3,0)) - parseFloat((analisecordas.getString(2,0)))))
      fill(cor4[i])
      // 3 que é 4
    }
    if (Math.floor(audio.currentTime % 60) >= (valor13) +  (parseFloat(analisecordas.getString(4,0) - parseFloat(analisecordas.getString(3,0))))) {
      valor14 = (valor13) + (parseFloat(analisecordas.getString(4,0) - parseFloat(analisecordas.getString(3,0))))
      fill(cor5[i])
    }
    if (Math.floor(audio.currentTime % 60) >= (valor14) +  (parseFloat(analisecordas.getString(5,0) - parseFloat(analisecordas.getString(4,0))))) {
      valor15 = (valor14) + (parseFloat(analisecordas.getString(5,0) - parseFloat(analisecordas.getString(4,0))))
      fill(cor6[i])
    }
    if (Math.floor(audio.currentTime % 60) >= (valor15) +  (parseFloat(analisecordas.getString(6,0) - parseFloat(analisecordas.getString(5,0))))) {
      valor16 = (valor15) + (parseFloat(analisecordas.getString(6,0) - parseFloat(analisecordas.getString(5,0))))
      fill(cor7[i])
      //print(valor16)
    }
    if (Math.floor(audio.currentTime % 60) >= (valor16) +  (parseFloat(analisecordas.getString(7,0) - parseFloat(analisecordas.getString(6,0))))) {
      valor17 = (valor16) + (parseFloat(analisecordas.getString(7,0) - parseFloat(analisecordas.getString(6,0))))
      fill(cor8[i])
      //print(valor17)
    }
    if (Math.floor(audio.currentTime % 60) >= (valor17) +  (parseFloat(analisecordas.getString(8,0) - parseFloat(analisecordas.getString(7,0))))) {
      valor18 = (valor17) + (parseFloat(analisecordas.getString(8,0) - parseFloat(analisecordas.getString(7,0))))
      fill(cor9[i])
      //print(valor18)
    }
    if (Math.floor(audio.currentTime % 60) >= (valor18) +  (parseFloat(analisecordas.getString(9,0) - parseFloat(analisecordas.getString(8,0))))) {
      valor19 = (valor18) + (parseFloat(analisecordas.getString(9,0) - parseFloat(analisecordas.getString(8,0))))
      fill(cor10[i])
      //print(valor19)
    }*/
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
