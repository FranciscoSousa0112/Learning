const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;
}


function calculate(){
    
    try{
        display.value = eval(display.value);

    }catch (error){
        display.value = "Error"
    }
}

function clearDisplay(){

    display.value = "";
}

function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}