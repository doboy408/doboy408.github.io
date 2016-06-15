//new audio object
mp3file.onchange = function(){
  var audio = new Audio();
  audio.src = URL.createObjectURL(document.getElementsByTagName('input')[0].files[0]);
  audio.controls = true;
  audio.loop = false;
  audio.autoplay = false;
};
//Analyser variables
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
var mp3file = document.getElementById('mp3file');

//Init mp3player and analyser after page loads
window.addEventListener("load", initMp3Player, false);

function initMp3Player(){
  document.getElementById('audiobox').appendChild(audio);
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('anal');
  ctx = canvas.getContext('2d');

  //re-route mp3 playback to processing graph
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  looper();
  }

//frameLooper() looping animating style of graphics
function looper(){
  window.RequestAnimationFrame(looper);
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00CCFF'; //color of bars
  bars = 100;
  for (var i = 0; i < bars; i++) {
    bar_x = i * 3;
    bar_width = 2;
    bar_height = -(fbc_array[i]/2);
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  }
}
