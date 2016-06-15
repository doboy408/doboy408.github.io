//new audio object
document.querySelector('input').onchange = funtion(){
  var fileReader = new FileReader;
  fileReader.onload = function(){
    var arrayBuffer = this.result;
    snippet.log(arrayBuffer);
    snippet.log(arrayBuffer.byteLength);
  }
  fileReader.readAsArrayBuffer(this.files[0]);

  var url = URL.createObjectURL(this.files[0]);
  audioplayer.src = url;
  audioplayer.play();

}

/*
//Analyser variables
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;

//Init mp3player and analyser after page loads

window.addEventListener("load", init, false);

function init(){
  document.getElementById('audiobox').appendChild(url);
  context = new AudioContext(window.AudioContext || window.webkitAudioContext)();
  analyser = context.createAnalyser();
  canvas = document.getElementById('anal');
  ctx = canvas.getContext('2d');

  //re-route mp3 playback to processing graph
  source = context.createMediaElementSource(url);
  source.connect(analyser);
  analyser.connect(context.destination);
  looper();
  }

//frameLooper() looping animating style of graphics
function looper(){
  window.requestAnimationFrame(looper);
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
*/
