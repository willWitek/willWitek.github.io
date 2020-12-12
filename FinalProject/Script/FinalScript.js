//2-9 make the dots on the suit clickable and trigger their special function
document.getElementById("shoulderDot").addEventListener("click", shoulderClicked);
document.getElementById("tieDot").addEventListener("click", tieClicked);
document.getElementById("lapelDot").addEventListener("click", lapelClicked);
document.getElementById("buttonDot").addEventListener("click", buttonClicked);
document.getElementById("dartDot").addEventListener("click", dartClicked);
document.getElementById("pocketDot").addEventListener("click", pocketClicked);
document.getElementById("cuffDot").addEventListener("click", cuffClicked);


let allDots = document.getElementsByClassName("dot"); //collection of all the dots
let mainImg = document.getElementById("mainImg"); //the suit image
let rightThird = document.getElementById("rightThird") //rightThird div (for changing text)

//16-22 store the text which is inserted into rightThird div based on which dot is clicked
let buttonContent = '<div class="center"><h3>Buttons</h3></div><p>Suit buttons come in a surprising variety of variations. The most visible differentiator in style is whether a suti is single-breasted or double-breasted. The single-breasted suit comes from an equestrian tradition, where a seam down the center of the body was needed to make a jacket comfortable while riding a horse. The double-breasted suit comes from a military tradition, where british navy officers wore large heavy coats with two rows of buttons so that material would overlap in the front to keep them warm against cold sea winds. Single-breasted suits typically have two or three buttons, although tuxedos and dinner jackets often only one. A very popular variation on suit buttons, especially in the American Northeast, is the three-roll-two configuration, where the jacket is made with three buttons but the top button is rolled into the lapel.</p><div class="imgContainer"><div><h4>Double Breasted</h4><img class="displayImg" src="Images/mainSuitAssets/doubleBreasted.jpg"></div><div><h4>Single Button</h4><img class="displayImg" src="Images/mainSuitAssets/singleBreasted.jpg"></div><div><h4>Three Roll Two</h4><img class="displayImg" src="Images/mainSuitAssets/threeRollTwo.jpg"></div></div><br><div class="center"><span id="back"><h4>Back</h4></span></div>';
let shoulderContent = '<div class="center"><h3>The Shoulder</h3></div><p>Shoulders play a huge part in defining the silhouette of the suit. They come in two main types: structured and unstructured. A structured (or padded) shoulder creates a very strong, broad, square silhouette and widens the upper chest. An unstructured shoulder creates a more natural, casual, and more non-chalant appearance. The Italian sartorial term for an unstructured shoulder is <em>spalla camicia</em>, which means "shirt shoulder." This is because the unstructured shoulder is sewn using the same technique used to sew the shoulder of a shirt. Generally, English and French suits will feature structured shoulders, while traditional Italian and American style suits will be less structured. Can you tell which type of shoulder is present on our model suit?</p><div class="imgContainer"><div><h4>Structured</h4><img class="displayImg" src="Images/mainSuitAssets/hardShoulder.jpg"></div><div><h4>Unstructured</h4><img class="displayImg" src="Images/mainSuitAssets/softShoulder.jpg"></div></div><br><div class="center"><span id="back"><h4>Back</h4></span></div>';
let tieContent = '<div class="center"><h3>The Tie</h3></div><p>Like many parts of the modern suit, ties have a military origin. Decorative cloth worn around the neck can be found on soldiers of the Terra Cotta Army in China from 200BC. The tie in its modern form can trace its origins to Croatian mercenaries serving in France during the Thirty Years War who wore knotted neckerchiefs. The French word for necktie is <em>cravate</em>, which comes from <em>Croate</em>. Ties come in all sorts of patterns from regimental stripes to foulard patterns, and can be made from a variety of materials such as linen, wool, and knitted silk. Neckties and Bow Ties are both appropriate for a suit, althoguh Bow Ties do bring a more casual flair. However, a black Bow Tie is expected for a tuxedo. There is also the option to forego a tie entirely for maximum comfort and a casual, relaxed vibe. </p><div class="imgContainer"><div><h4>Necktie</h4><img class="displayImg" src="Images/mainSuitAssets/neckTie.jpg"></div><div><h4>Bow Tie</h4><img class="displayImg" src="Images/mainSuitAssets/bowTie.jpg"></div><div><h4>No Tie</h4><img class="displayImg" src="Images/mainSuitAssets/noTie.jpg"></div></div><br><div class="center"><span id="back"><h4>Back</h4></span></div>';
let lapelContent = '<div class="center"><h3>The Lapel</h3></div><p>Lapels are a surprisingly variant portion of a suit. They originally served a practical purpose as an extra piece of fabric to fold over your chest to keep you warm, although over time that functionality has almost entirely vanished. Generally, lapels come in three styles: Notch, Peak, and Shawl (in rising order of formality). Notch lapels are the most common, and are typically found on single-breasted suits. Peak lapels are slightly more formal, and can be found on business suits (often double-breasted) and sometimes on tuxedos and dinner jackets. Shawl lapels are the most formal type of lapel and, apart from bespoke garments, are found exclusively on tuxedos and dinner jackets. In addition, lapels can vary in width from narrow (2") lapels to extremely wide (4+"). Wider lapels tend to be associated with older generations, while narrower lapels give a more youthful look. The lapels on display here are of medium width (3-4").  Which type of lapel do you prefer? Can you figure out what type of lapel is on the display suit?</p> <div class="imgContainer"><div><h4>Notch Lapel</h4><img class="displayImg" src="Images/mainSuitAssets/notchLapel.jpg"></div><div><h4>Peak Lapel</h4><img class="displayImg" src="Images/mainSuitAssets/peakLapel.jpg"></div><div><h4>Shawl Lapel</h4><img class="displayImg" src="Images/mainSuitAssets/shawlLapel.jpg"></div></div><br><div class="center"><span id="back"><h4>Back</h4></span></div>';
let dartContent = '<div class="center"><h3>Darts</h3></div><p>Darts are an incredibly subtle detail on a suit which work in combination with the shoulders to build the silhouette of the jacket. Darts are small creases which are used to pull in fabric from the sides of the suit and add curvature to the waist. Generally, we see darts in highly structured suits like the English and French styles, although they can also be found in Italian style suits because the slim Italian cuts necessitate additional fabric being taken in from the sides. The only country with a tradition of not using darts is America, where the un-darted "sack suit" is quite popular, especially in the northeast.</p><div class="imgContainer"><div><h4>Sack Suit</h4><img class="displayImg" src="Images/mainSuitAssets/sackSuit.jpg"></div></div><br><span id="back"><h4>Back</h4></span></div>';
let pocketContent = '<div class="center"><h3>The Pocket</h3></div><p>Pockets are perhaps the most functional part of a suit. In the equestrian tradition, pockets were placed on an angle to the suit so that they would sit parallel to the ground while the wearer leaned forward on a horse. The slanted pocket has largely been replaced by flat pockets although they can still be found, usually on bespoke suits. Pockets come in three main styles: Piped, Flap, and Patch. Piped pockets look like narrow slits on the jacket at hip height. The are the most formal style and are typically found on tuxedos and dinner jackets. Flap Pockets are slightly less formal than the Piped Pocket, and feature a flap which folds over the pocket to protect the items inside. The least formal type of pocket is the patch pocket, which is usually found on casual blazers and sportcoats. It is large patch of fabric sewn on to the outside of the jacket, which makes it appear almost like a small bag or basket. </p><div class="imgContainer"><div><h4>Piped Pocket</h4><img class="displayImg" src="Images/mainSuitAssets/pipedPocket.jpg"></div><div><h4>Flap Pocket</h4><img class="displayImg" src="Images/mainSuitAssets/flapPocket.jpg"></div><div><h4>Patch Pocket</h4><img class="displayImg" src="Images/mainSuitAssets/patchPocket.jpg"></div></div><br><div class="center"><span id="back"><h4>Back</h4></span></div>';
let cuffContent = '<div class="center"><h3>The Cuff</h3></div><p>Cuffs have perhaps the most unexpected depth of design and potential for detail of any aspect of the suit jacket. The jacket cuff started as a highly function piece of a suit which made it an easier garment to put on and remove by loosening the hand opening on the sleeve. In the modern era, the vast majority of suits come with non-functional cuff buttons, simply because they are easier to manufacture for the mass market. Suits which have functional cuffs nowadays are known as Surgeon\'s Cuffs, with the story being that surgeons need to be able to easily roll up their sleeves to perform emergency surgeries while in full suit and tie. A detail which is present even on mass-produced suits is the button distance. Buttons can be either non-kissing, kissing, or stacked, depending on how far apart they are. There is no difference in formality between these button styles, although stacked buttons could be considered more formal because they are harder to use, and things that are hard to use are generally more formal, see Oxfords vs. Derbies.</p><div class="imgContainer"><div><h4>Stacked Buttons</h4><img class="displayImg" src="Images/mainSuitAssets/stackedButtons.jpg"></div><div><h4>Kissing Buttons</h4><img class="displayImg" src="Images/mainSuitAssets/kissingButtons.jpg"></div><div><h4>Surgeon\'s Cuffs</h4><img class="displayImg" src="Images/mainSuitAssets/surgeonCuffs.jpg"></div></div><br><div class="center"><span id="back"><h4>Back</h4></span></div>';

//25 restores the default text to rightThird
let defaultContent = '<div class="center"><h3>Click a feature to explore</h3></div>'

//only commenting for shoulder because all special part functions work the same
function shoulderClicked(){
    console.log("shoulder was clicked"); //debugging feature
    rightThird.innerHTML = shoulderContent; //sets the rightThird content to the shoulder content

    textFadeIn.play();  //plays animation to fade in rightThird content
    fadeDots.play();    //plays animation to fade out the dots
    anime({             //main animation to zoom in on the shoulder
        targets: mainImg,
        scale: 2.3,
        translateX: 75,
        translateY: 180,
        easing: 'easeInOutCubic'
    })
    
    document.getElementById("back").addEventListener("click", backClicked); //there is a back button that appears in rightThird, this makes the back button clickable
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

//nearly the same as special part functions but in reverse
function backClicked(){
    rightThird.innerHTML = rightThird.innerHTML; //maintains the rightThird text for the duration of the fade out animation (I think- idk if this is necessary)
    
    textFadeOut.play(); //plays the animation to fade out the text
    

    anime({             //animation to reset the suit to its default position
        targets: mainImg,
        scale: 1,
        translateX: 0,
        translateY: 0,
        easing: 'easeInOutCubic'
    });

    anime({             //fades the dots back in
        targets: allDots,
        opacity: 100,
        delay: anime.stagger(200)
    });

    setTimeout(restoreDefaultContent, 1000); //after a 1000ms delay, triggers restoreDefaultContent
}

//restores defaultContent to rightThird div, then fades in the rightThird text
function restoreDefaultContent(){

    rightThird.innerHTML = defaultContent;
    textFadeIn.play();

}

//fades out the dots
var fadeDots =  anime({
    targets: allDots,
    opacity: 0,
    delay: anime.stagger(100),
    autoplay: false,
});

//animation timeline to fade in the rightThird text
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

//animation timeline to fade out the rightThird text
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