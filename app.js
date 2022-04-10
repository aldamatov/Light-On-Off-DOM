const imgTag = document.querySelector('img');
let isLightOn = false;


imgTag.style.cursor = "pointer";
imgTag.style.width = "30%";
imgTag.style.margin = "auto";


imgTag.addEventListener('click', function(){

    if (isLightOn === true) {
        imgTag.src = "https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png";
         isLightOn = false;
         console.log(isLightOn, "It is Off");
        } else {
        imgTag.src = "https://learn.seytech.co/assets/slides/js-intro/assets/lighton.png";
        
        isLightOn = true;
        console.log(isLightOn, "It is On");
    }
});

