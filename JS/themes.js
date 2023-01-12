import {updatePeopleThemes} from './index.js'


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
