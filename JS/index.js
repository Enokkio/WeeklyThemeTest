import {addPeople,deletePeople,clearPeople,editPeople,checkval} from './people.js'
import {addTheme,deletethemes,clearThemes} from './themes.js'



var peopleArray = [];


var themesArray = [
    "50-tal",
    "60-tal",
    "70-tal",
    "80-tal",
    "90-tal",
    "Jazz",
    "Superhjältar",
    "Antagonister",
    "Rustikt och robust"];
var historyArray = [];




function setup()
{

    
//Checks for localstorages
if (localStorage.getItem("people") == null)
 {
    localStorage.setItem("people",JSON.stringify(peopleArray))   

 }
 else{
    peopleArray = JSON.parse(localStorage.getItem("people"))

 }


 if (localStorage.getItem("themes") == null)
 {
    localStorage.setItem("themes",JSON.stringify(themesArray))   
 }
 else{
    themesArray = JSON.parse(localStorage.getItem("themes"))
 }


 if (localStorage.getItem("history") == null)
 {
    localStorage.setItem("history",historyArray)   
 }
 else{
    historyArray = localStorage.getItem("history")
 }



let addPeopleButton = document.getElementById("addPeopleButton")
addPeopleButton.addEventListener("click", function(){
    addPeople(peopleArray);
});

let addThemesButton = document.getElementById("addThemesButton")
addThemesButton.addEventListener("click", function(){
    addTheme(themesArray);
    console.log(themesArray)
});

let deletePeopleButton = document.getElementById("deletePeopleButton")
deletePeopleButton.addEventListener("click", function(){
    deletePeople(peopleArray)
});

let deleteThemesButton = document.getElementById("deleteThemesButton")
deleteThemesButton.addEventListener("click", function(){
    deletethemes(themesArray)
});

let clearThemesButton = document.getElementById("clearThemesButton")
clearThemesButton.addEventListener("click", function(){
    clearThemes(themesArray)
});

let clearPeopleButton = document.getElementById("clearPeopleButton")
clearPeopleButton.addEventListener("click", function(){
    clearPeople(peopleArray)
});

let editButton = document.getElementById("editButton")
editButton.addEventListener("click", function(){
    checkval()

    editPeople(peopleArray)
});

console.log("successfully run setup")
}


export function updatePeopleThemes(){
    const select = document.getElementById("peopleList")
    select.options.length =0;

    const selectTheme = document.getElementById("themesList")
    selectTheme.options.length =0;
    


for (let i = 0; i < peopleArray.length; i++) {

    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = `${peopleArray[i].firstName}  ${peopleArray[i].lastName}`;

    select.appendChild(opt);    
}

for (let i = 0; i < themesArray.length; i++) {

    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = `${themesArray[i]}`;
    selectTheme.appendChild(opt);    
}

}

setup()
updatePeopleThemes();


