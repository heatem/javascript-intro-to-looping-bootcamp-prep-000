
function forLoop(array) {
  var l = array.length;
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array[i] = "I am 1 strange loop." // solutions file uses array.push
    }
    else {
      array[i + l] = `I am ${i} strange loops.` // solutions file uses array.push
    }
  }
  return array;
}




function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }

  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  };
  do {
    array.pop(); // solutions file uses array.slice(1)
  }
  while (array.length > 0 && maybeTrue());

  return array;
}
