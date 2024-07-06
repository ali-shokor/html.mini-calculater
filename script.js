const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

function clear1(){
    display.value = "";
}

function playAudio() {
    var audio = document.getElementById('audio');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
}