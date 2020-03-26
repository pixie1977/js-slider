const delimiter = '%';
const cityNames = [
    {name:'Rostov-on-Don%LCD admiral', area:'81 m2', time:'3.5 months', cost:'Upon request', img:'admiral.png'},
    {name:'Sochi%Thieves', area:'105 m2', time:'4 months', cost:'Upon request', img:'thieves.png'},
    {name:'Rostov-on-Don%Patriotic', area:'93 m2', time:'3 months', cost:'Upon request', img:'patriot.png'}
];
let objectNameFirstDiv;
let objectNameSecondDiv;
let apartmentAreaDiv;
let repairTimeDiv;
let repairCostDiv;
let imageContainerDiv;
let state = 0;

function init() {
    objectNameFirstDiv = document.getElementById("object-name-first");
    objectNameSecondDiv = document.getElementById("object-name-second");
    apartmentAreaDiv = document.getElementById("apartment-area");
    repairTimeDiv = document.getElementById("repair-time");
    repairCostDiv = document.getElementById("repair-cost");
    imageContainerDiv = document.getElementById("image-container");
}

function updateRects(_state) {
    for( let i=0; i<cityNames.length; i++) {
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
    objectNameFirstDiv.innerHTML=cityNames[_state].name.toString().split(delimiter)[0];
    const str = cityNames[_state].name.toString();
    objectNameSecondDiv.innerHTML=str.substr(str.indexOf(delimiter)+1);
    apartmentAreaDiv.innerHTML=cityNames[_state].area.toString();
    repairTimeDiv.innerHTML=cityNames[_state].time.toString();
    repairCostDiv.innerHTML=cityNames[_state].cost.toString();
    imageContainerDiv.src="img/"+cityNames[_state].img;
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
    init();
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

