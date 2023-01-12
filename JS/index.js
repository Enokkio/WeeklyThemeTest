import {addPeople,deletePeople} from './people.js'
import {addTheme} from './themes.js'



var peopleArray = [];
var themesArray = ["70-talet","80-talet","90-Talet","Golf"];
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
    console.log(themesArray[i])
    selectTheme.appendChild(opt);    
}

}

setup()
updatePeopleThemes();


