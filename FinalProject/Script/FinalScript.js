document.getElementById("shoulderDot").addEventListener("click", shoulderClicked);
document.getElementById("tieDot").addEventListener("click", tieClicked);
document.getElementById("lapelDot").addEventListener("click", lapelClicked);
document.getElementById("buttonDot").addEventListener("click", buttonClicked);
document.getElementById("dartDot").addEventListener("click", dartClicked);
document.getElementById("pocketDot").addEventListener("click", pocketClicked);
document.getElementById("cuffDot").addEventListener("click", cuffClicked);

let selectedElement = "none";
let allDots = document.getElementsByClassName("dot");
let mainImg = document.getElementById("mainImg");
let rightThird = document.getElementById("rightThird")


let buttonContent = '<div class="center"><h3>Buttons</h3></div><p>Buttons ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Nibh ipsum consequat nisl vel pretium. Sed blandit libero volutpat sed. Quam elementum pulvinar etiam non quam lacus. Erat velit scelerisque in dictum non consectetur a erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Consequat ac felis donec et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae congue mauris rhoncus aenean. Netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo odio. Facilisis gravida neque convallis a. Sed nisi lacus sed viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Massa sapien faucibus et molestie ac feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Proin sed libero enim sed faucibus turpis in eu mi. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.</p><div class="center"><span id="back"><h4>Back</h4></span></div>';
let shoulderContent = '<div class="center"><h3>The Shoulder</h3></div><p>Shoulder ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Nibh ipsum consequat nisl vel pretium. Sed blandit libero volutpat sed. Quam elementum pulvinar etiam non quam lacus. Erat velit scelerisque in dictum non consectetur a erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Consequat ac felis donec et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae congue mauris rhoncus aenean. Netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo odio. Facilisis gravida neque convallis a. Sed nisi lacus sed viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Massa sapien faucibus et molestie ac feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Proin sed libero enim sed faucibus turpis in eu mi. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.</p><div class="center"><span id="back"><h4>Back</h4></span></div>';
let tieContent = '<div class="center"><h3>The Tie</h3></div><p>Tie ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Nibh ipsum consequat nisl vel pretium. Sed blandit libero volutpat sed. Quam elementum pulvinar etiam non quam lacus. Erat velit scelerisque in dictum non consectetur a erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Consequat ac felis donec et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae congue mauris rhoncus aenean. Netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo odio. Facilisis gravida neque convallis a. Sed nisi lacus sed viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Massa sapien faucibus et molestie ac feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Proin sed libero enim sed faucibus turpis in eu mi. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.</p><div class="center"><span id="back"><h4>Back</h4></span></div>';
let lapelContent = '<div class="center"><h3>The Lapel</h3></div><p>Lapel ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Nibh ipsum consequat nisl vel pretium. Sed blandit libero volutpat sed. Quam elementum pulvinar etiam non quam lacus. Erat velit scelerisque in dictum non consectetur a erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Consequat ac felis donec et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae congue mauris rhoncus aenean. Netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo odio. Facilisis gravida neque convallis a. Sed nisi lacus sed viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Massa sapien faucibus et molestie ac feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Proin sed libero enim sed faucibus turpis in eu mi. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.</p><div class="center"><span id="back"><h4>Back</h4></span></div>';
let dartContent = '<div class="center"><h3>Darts</h3></div><p>Darts ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Nibh ipsum consequat nisl vel pretium. Sed blandit libero volutpat sed. Quam elementum pulvinar etiam non quam lacus. Erat velit scelerisque in dictum non consectetur a erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Consequat ac felis donec et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae congue mauris rhoncus aenean. Netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo odio. Facilisis gravida neque convallis a. Sed nisi lacus sed viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Massa sapien faucibus et molestie ac feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Proin sed libero enim sed faucibus turpis in eu mi. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.</p><div class="center"><span id="back"><h4>Back</h4></span></div>';
let pocketContent = '<div class="center"><h3>The Pocket</h3></div><p>Pocket ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Nibh ipsum consequat nisl vel pretium. Sed blandit libero volutpat sed. Quam elementum pulvinar etiam non quam lacus. Erat velit scelerisque in dictum non consectetur a erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Consequat ac felis donec et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae congue mauris rhoncus aenean. Netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo odio. Facilisis gravida neque convallis a. Sed nisi lacus sed viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Massa sapien faucibus et molestie ac feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Proin sed libero enim sed faucibus turpis in eu mi. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.</p><div class="center"><span id="back"><h4>Back</h4></span></div>';
let cuffContent = '<div class="center"><h3>The Cuff</h3></div><p>Cuffs ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Nibh ipsum consequat nisl vel pretium. Sed blandit libero volutpat sed. Quam elementum pulvinar etiam non quam lacus. Erat velit scelerisque in dictum non consectetur a erat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Consequat ac felis donec et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae congue mauris rhoncus aenean. Netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo odio. Facilisis gravida neque convallis a. Sed nisi lacus sed viverra tellus in. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Massa sapien faucibus et molestie ac feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Proin sed libero enim sed faucibus turpis in eu mi. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.</p><div class="center"><span id="back"><h4>Back</h4></span></div>';


let defaultContent = '<div class="center"><h3>Click a feature to explore</h3></div>'

function shoulderClicked(){
    console.log("shoulder was clicked");
    rightThird.innerHTML = shoulderContent;

    textFadeIn.play();
    fadeDots.play();
    anime({
        targets: mainImg,
        scale: 2.3,
        translateX: 75,
        translateY: 180,
        easing: 'easeInOutCubic'
    })
    
    document.getElementById("back").addEventListener("click", backClicked);
}
function tieClicked(){
    console.log("Tie was clicked");
    rightThird.innerHTML = tieContent;

    textFadeIn.play();
    fadeDots.play();
    anime({
        targets: mainImg,
        scale: 2.5,
        translateX: 0,
        translateY: 150,
        easing: 'easeInOutCubic'
    })

    document.getElementById("back").addEventListener("click", backClicked);
}
function lapelClicked(){
    console.log("lapel was clicked");
    rightThird.innerHTML = lapelContent;
    
    textFadeIn.play();
    fadeDots.play();
    anime({
        targets: mainImg,
        scale: 3,
        translateX: -50,
        translateY: 130,
        easing: 'easeInOutCubic'
    })
    
    document.getElementById("back").addEventListener("click", backClicked);
}
function buttonClicked(){
    console.log("button was clicked");
    rightThird.innerHTML = buttonContent;

    textFadeIn.play();
    fadeDots.play();
    anime({
        targets: mainImg,
        scale: 2.3,
        translateX: 0,
        translateY: -90,
        easing: 'easeInOutCubic'
    })
    
    document.getElementById("back").addEventListener("click", backClicked);
}
function dartClicked(){
    console.log("Dart was clicked");
    rightThird.innerHTML = dartContent;

    textFadeIn.play();
    fadeDots.play();
    anime({
        targets: mainImg,
        scale: 2.3,
        translateX: 75,
        translateY: -30,
        easing: 'easeInOutCubic'
    })
    
    document.getElementById("back").addEventListener("click", backClicked);
}
function pocketClicked(){
    console.log("Pocket was clicked");
    rightThird.innerHTML = pocketContent;

    textFadeIn.play();
    fadeDots.play();
    anime({
        targets: mainImg,
        scale: 2.3,
        translateX: 75,
        translateY: -140,
        easing: 'easeInOutCubic'
    })
    
    document.getElementById("back").addEventListener("click", backClicked);
}
function cuffClicked(){
    console.log("cuff was clicked");
    rightThird.innerHTML = cuffContent;

    textFadeIn.play();
    fadeDots.play();
    anime({
        targets: mainImg,
        scale: 2.5,
        translateX: -130,
        translateY: -160,
        easing: 'easeInOutCubic'
    })
    
    document.getElementById("back").addEventListener("click", backClicked);
}


function backClicked(){
    rightThird.innerHTML = rightThird.innerHTML;
    
    textFadeOut.play();
    

    anime({
        targets: mainImg,
        scale: 1,
        translateX: 0,
        translateY: 0,
        easing: 'easeInOutCubic'
    });

    anime({
        targets: allDots,
        opacity: 100,
        delay: anime.stagger(200)
    });

    setTimeout(restoreDefaultContent, 1000);
}

function restoreDefaultContent(){

    rightThird.innerHTML = defaultContent;
    textFadeIn.play();

}

var fadeDots =  anime({
    targets: allDots,
    opacity: 0,
    delay: anime.stagger(100),
    autoplay: false,
});

var textFadeIn = anime.timeline({
    easing: 'easeOutCirc',
    duration: 2000,
    autoplay: false,
});
textFadeIn
.add({
    targets: rightThird,
    duration: 0,
    opacity: 0,
    autoplay: false,
})
.add({
    targets: rightThird,
    duration: 1500,
    opacity: 1,
    autoplay: false,
});

var textFadeOut = anime.timeline({
    easing: 'easeOutCirc',
    duration: 1000,
    autoplay: false,
});
textFadeOut
.add({
    targets: rightThird,
    duration: 0,
    opacity: 1,
    autoplay: false,
})
.add({
    targets: rightThird,
    duration: 700,
    opacity: 0,
    autoplay: false,
});