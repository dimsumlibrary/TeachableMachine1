// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/Vev45HRAW/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(640, 520);
  // STEP 2: Start classifying
  classifyaudio();
}

// STEP 2 classify the videeo!
function classifyaudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  let emoji = "🎧";
  if (label == "A") {
    emoji = "🄰";
  } else if (label == "B") {
    emoji = "🄱";
  } else if (label == "C") {
    emoji = "🄲";
  } else if (label == "D") {
    emoji = "🄳";
  } else if (label == "E") {
    emoji = "🄴";
  }else if (label == "F") {
    emoji = "🄵";
  } else if (label == "G") {
    emoji = "🄶";
  } else if (label == "H") {
    emoji = "🄷";
  } else if (label == "I") {
    emoji = "🄸";
  }else if (label == "J") {
    emoji = "🄹";
  } else if (label == "K") {
    emoji = "🄺";
  } else if (label == "L") {
    emoji = "🄻";
  } else if (label == "M") {
    emoji = "🄼";
  }else if (label == "N") {
    emoji = "🄽";
  } else if (label == "O") {
    emoji = "🄾";
  } else if (label == "P") {
    emoji = "🄿";
  } else if (label == "Q") {
    emoji = "🅀";
  }else if (label == "R") {
    emoji = "🅁";
  } else if (label == "S") {
    emoji = "🅂";
  } else if (label == "T") {
    emoji = "🅃";
  } else if (label == "U") {
    emoji = "🅄";
  }else if (label == "V") {
    emoji = "🅅";
  } else if (label == "W") {
    emoji = "🅆";
  } else if (label == "X") {
    emoji = "🅇";
  }else if (label == "Y") {
    emoji = "🅈";
  } else if (label == "Z") {
    emoji = "🅉";
  } 

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
}
