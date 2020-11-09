
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

var numClicks = 0;

function incClicks(){
    numClicks = numClicks + 1;
    console.log(numClicks);
    document.getElementById("clicks").innerHTML = numClicks;
}

var totalTimes = 0;
var lastTime = 0, newTime = 0, timeDiff = 0;
function getTimeDiff(){
    newTime = Date.now();
    timeDiff = Math.abs(newTime - lastTime);
    console.log(timeDiff);
    document.getElementById("time").innerHTML = timeDiff;
    lastTime = newTime;

    totalTimes = totalTimes + timeDiff;
}

function avSpeed(){
    var avTime = totalTimes / numClicks;
    document.getElementById("average").innerHTML = avTime;
}

function randLoc(){
    document.getElementById("theButton").style.top = getRandomInt(450);
    document.getElementById("theButton").style.left = getRandomInt(1000);
}

