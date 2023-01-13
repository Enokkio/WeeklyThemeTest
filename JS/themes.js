import {updatePeopleThemes} from './index.js'


export function deletethemes(array){

    var selectobject = document.getElementById("themesList");
    var value = selectobject.value;

    for (var i=0; i<selectobject.length; i++) {
    if (selectobject.options[i].value == value)
        selectobject.remove(i);
    }

    array.splice(value,1)
    

localStorage.setItem("themes",JSON.stringify(array))   
updatePeopleThemes();
}

export function clearThemes(array){

    var selectobject = document.getElementById("peopleList");

    selectobject.innerHTML="";
  

    array = [];

window.location.reload()
localStorage.setItem("themes",JSON.stringify(array))   
updatePeopleThemes();

}

export function addTheme(array){
    var canAdd = true;
   let theme = document.getElementById("themeInput").value

   for (let i = 0; i < array.length; i++) {
       if (array[i] == theme ) {
           canAdd = false;
           alert("can not add the same theme")
           return
       }

   }

 if (canAdd) {
   array.push(theme)   

 }
 
   localStorage.setItem("themes",JSON.stringify(array))   
updatePeopleThemes();
}
