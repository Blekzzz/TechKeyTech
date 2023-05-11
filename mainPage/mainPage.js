let playBtn = document.getElementById("soundBtn");
let playBtnClassic = document.getElementById("soundBtnClassic");
let testBtn = document.getElementById("testbtn");
let blueSound = document.getElementById("blueSound");
let redSound = document.getElementById("redSound");
let brownSound = document.getElementById("brownSound");
let normalSound = document.getElementById("normalSound");
let switchTerpilih = document.getElementById("switchKeyList");
let itemText = document.getElementById("itemTxt");
let defaultText = itemText.innerText;
let suara = blueSound;


switchTerpilih.addEventListener("change",ubahTextItem)
function ubahTextItem(){
    playBtn.innerText = 'Play the KeySwitch Audio!';
    suara.load();
    let keyChoosed = switchTerpilih.value;
    if(keyChoosed === "red"){
    // testBtn.innerText = keyChoosed;
    suara.pause();
    suara = redSound;
    itemText.innerText = defaultText+" With Red Switches are Linear, Smooth, and relatively quiet, Their Linear action feels very smooth."+ 
    "Red Switches are silent when pressed softly. But can still be noisy when pressed hard.";
    }
    else if(keyChoosed === "blue"){
        suara.pause();
    suara = blueSound;
    itemText.innerText = defaultText+" With Blue Switches are Clicky and Tactiles. Blue Switches produces a relatively loud click when pressed,"+
    "You will also feel a pronounced bump when pressing the keys. Blue switches can still be noisy even when pressed lightly.";
    }
    else if(keyChoosed === "brown"){
        suara.pause();
    suara = brownSound;
    itemText.innerText = defaultText+" With Brown Switchees are Tactile and Quiet. Brown Switches are relatively quiet, about the same as Reds,"+
    " you will feel a small, smooth tactile bump when pressing the keys. Brown Switches are very similiar to Reds in volume.";
    }else if(keyChoosed === "zero"){
    
    }else{
    suara = normalSound;
    suara.pause();
    itemText.innerText = defaultText+", with Normal membrane Switches.";
    }
}

playBtnClassic.addEventListener("click",myFunctionClassic); 
function myFunctionClassic(){
    if(playBtnClassic.innerText === 'Play the KeySwitch Audio!'){
        playBtnClassic.innerText = 'Stop the Audio!';
        // playBtnClassic.innerText = suarabiru.duration;
        normalSound.load();
        normalSound.play();       
        normalSound.onended = function(){
        playBtnClassic.innerText = 'Play the KeySwitch Audio!';
        }                                
    }
    else{
        playBtnClassic.innerText = 'Play the KeySwitch Audio!';
        normalSound.pause();
    }
} 

playBtn.addEventListener("click",myFunction);  
function myFunction(){
    // alert('its cliicked!');
    // alert(switchTerpilih.value);
    if(switchTerpilih.value === "zero"){
        alert("Choose your switch first");
        
    }
    else if(playBtn.innerText === 'Play the KeySwitch Audio!' && switchTerpilih.value !== "zero"){
        playBtn.innerText = 'Stop the Audio!';
        // playBtn.innerText = suarabiru.duration;
        suara.load();
        suara.play();
        suara.onended = function(){
        playBtn.innerText = 'Play the KeySwitch Audio!';
        }      
        
    }
    else{
        playBtn.innerText = 'Play the KeySwitch Audio!';
        suara.pause();
    }  
}
