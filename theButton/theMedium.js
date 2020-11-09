
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

var numClicks = 0;

function incClicks(){
    numClicks = numClicks + 1;
    console.log(numClicks);
    document.getElementById("clicks").innerHTML = numClicks;
}


function randLoc(){
    document.getElementById("theButton").style.top = getRandomInt(450);
    document.getElementById("theButton").style.left = getRandomInt(1000);
}

