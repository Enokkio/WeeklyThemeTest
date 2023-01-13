import { updatePeopleThemes } from './index.js' ;


let editor = false;
let selectobject = document.getElementById("peopleList");
let value = selectobject.value;

export function checkval(){
  
  if (editor == false) {
    value = selectobject.value;

  }

  
  console.log(value)}



export function clearPeople(array){

  var selectobject = document.getElementById("peopleList");

  selectobject.innerHTML="";
  // while(selectobject.options.length>0){
  //     selectobject.remove(0)
  // }

  array = [];

window.location.reload()
localStorage.setItem("people",JSON.stringify(array))   
updatePeopleThemes();

}



export function editPeople(array){

  if (value == null) {
    alert("select person to edit")

  }
  
  else{
if (editor == true) {
  var editButton = document.getElementById("editButton");
  editButton.value = "Edit"
  console.log( document.getElementById("firstName").value )
  array[value].firstName = document.getElementById("firstName").value 
  array[value].lastName= document.getElementById("lastName").value
  array[value].number = document.getElementById("number").value
  value = null;
  
}
else{
  var editButton = document.getElementById("editButton");
  editButton.innerHTML = "confirm Edit"

  let firstname = document.getElementById("firstName")
  let lastname = document.getElementById("lastName")
  let number = document.getElementById("number")

  console.log(array)
  firstname.value = array[value].firstName
  lastname.value = array[value].lastName
  number.value= array[value].number
  editor = true;


}
}

updatePeopleThemes();


}



export function deletePeople(array){

    var selectobject = document.getElementById("peopleList");
    var value = selectobject.value;

    for (var i=0; i<selectobject.length; i++) {
    if (selectobject.options[i].value == value)
        selectobject.remove(i);
    }

    array.splice(value,1)
    

localStorage.setItem("people",JSON.stringify(array))   
updatePeopleThemes();
}

export function addPeople(array){

     var canAdd = true;
    let firstname = document.getElementById("firstName").value
    let lastname = document.getElementById("lastName").value
    let number = document.getElementById("number").value
    var person = {firstName:firstname, lastName:lastname, number:number, chance:100};


    for (let i = 0; i < array.length; i++) {
        if (array[i].firstName == firstname && array[i].lastName== lastname && array[i].number == number) {
            canAdd = false;
            alert("can not add a person with identical values")
            return
        }

    }

  if (canAdd) {
    array.push(person)   

  }
  
localStorage.setItem("people",JSON.stringify(array))   
updatePeopleThemes();
}
