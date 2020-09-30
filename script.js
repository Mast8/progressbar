const progressBar = document.getElementsByClassName('progress-bar')[0]


var max = 100;
var time = 100;

function myFunction() {
  initialState();
  var wow = setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressBar.style.setProperty('--width', width + 1)
    // console.log(width);
    progressBar.setAttribute('data-label', width + 1 +"%");

    if (width >= max ){
      progressBar.setAttribute('data-label', "DONE! ty");
      clearInterval(wow);
    }
    console.log(time);
  }, time)
  // console.log(wow);
}

function initialState() {
  progressBar.style.setProperty('--width',0)
  progressBar.setAttribute('data-label', "Loading...");
}



