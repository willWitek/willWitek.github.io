document.getElementById("shoulderDot").addEventListener("click", shoulderClicked);
document.getElementById("tieDot").addEventListener("click", tieClicked);
document.getElementById("lapelDot").addEventListener("click", lapelClicked);
document.getElementById("buttonDot").addEventListener("click", buttonClicked);
document.getElementById("dartDot").addEventListener("click", dartClicked);
document.getElementById("pocketDot").addEventListener("click", pocketClicked);
document.getElementById("cuffDot").addEventListener("click", cuffClicked);

let selectedElement = "none";
let allDots = document.getElementsByClassName("dot");

function shoulderClicked(){
    console.log("shoulder was clicked");
    
}
function tieClicked(){
    console.log("Tie was clicked");
    
}
function lapelClicked(){
    console.log("lapel was clicked");
    
}
function buttonClicked(){
    console.log("button was clicked");
    hideDots();
    document.getElementById("mainImg").src="Images/mainSuitAssets/buttonDetail.jpg";
}
function dartClicked(){
    console.log("Dart was clicked");
    
}
function pocketClicked(){
    console.log("Pocket was clicked");
    
}
function cuffClicked(){
    console.log("cuff was clicked");
    
}

function hideDots(){
    for (let i = 0; i < allDots.length; i++) {
        allDots[i].display="none";
    }

}