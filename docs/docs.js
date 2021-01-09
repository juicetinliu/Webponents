let main;
let consoleText;
let slider;

let prevval, curval;

function setup() {
  setupHTML();
  background(0);
  prevval = -1;
  curval = prevval;
}


function draw() {
  curval = slider.val();
  if(curval !== prevval){
    slideText.changeText(curval);
    preval = curval;
  }
}
