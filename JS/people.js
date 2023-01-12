import { updatePeopleThemes } from './index.js' ;




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
            alert("can not add a person with exactly the same values")
            return
        }

    }

  if (canAdd) {
    array.push(person)   

  }
  
localStorage.setItem("people",JSON.stringify(array))   
updatePeopleThemes();
}
