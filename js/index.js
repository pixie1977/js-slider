const cityNames = [
    {name:'Rostov-on-Don LCD admiral', area:'81 m2', time:'3.5 months', cost:'Upon request', img:'admiral.png'},
    {name:'Sochi Thieves', area:'105 m2', time:'4 months', cost:'Upon request', img:'thieves.png'},
    {name:'Rostov-on-Don Patriotic', area:'93 m2', time:'3 months', cost:'Upon request', img:'patriot.png'}
];

var state = 0;

function updateCityFirstName(_state) {
    const element = document.getElementById("object-name-first");
    element.innerHTML=cityNames[_state].name.toString().split(' ')[0];
}

function updateCitySecondName(_state) {
    const element = document.getElementById("object-name-second");
    const str = cityNames[_state].name.toString();
    element.innerHTML=str.substr(str.indexOf(' '));
}

function updateArea(_state) {
    const element = document.getElementById("apartment-area");
    element.innerHTML=cityNames[_state].area.toString();
}

function updateRepairTime(_state) {
    const element = document.getElementById("repair-time");
    element.innerHTML=cityNames[_state].time.toString();
}

function updateRepairCost(_state) {
    const element = document.getElementById("repair-cost");
    element.innerHTML=cityNames[_state].cost.toString();
}

function updateImage(_state) {
    const element = document.getElementById("image-container");
    element.src="img/"+cityNames[_state].img;
}

function updateRects(_state) {
    var i;
    for( i=0; i<cityNames.length; i++) {
        const rect = document.getElementById("r"+i);
        if( _state === i ){
            rect.removeAttribute("fill-opacity");
        } else {
            rect.setAttribute("fill-opacity", '0.3');
        }
    }
}

function updateTitles(_state) {
    var i;
    for( i=0; i<cityNames.length; i++) {
        const rect = document.getElementById("a"+i);
        if( _state === i ){
            rect.classList.add("upper-title-selected");
        } else {
            rect.classList.remove("upper-title-selected");
        }
    }
}

function updateAll(_state) {
    updateCityFirstName(_state);
    updateCitySecondName(_state);
    updateArea(_state);
    updateRepairTime(_state);
    updateRepairCost(_state);
    updateImage(_state);
    updateRects(_state);
    updateTitles(_state);
}

function setState(num) {
    if(num>=0 && num<cityNames.length){
        state = num;
    }
    updateAll(state);
}

function doLoadComplete(){
    console.log("onload");
    setState(0);
}

function doClickLeft(){
    const newState = state-1;
    if(newState<0){
        setState(cityNames.length-1);
    } else{
        setState(newState);
    }
}

function doClickRight(){
    const newState = state+1;
    if(newState>=cityNames.length){
        setState(0);
    } else{
        setState(newState);
    }
}

