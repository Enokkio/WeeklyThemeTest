import { updatePeopleThemes } from "./index.js";

function generateNumber(min,max){

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateWeekly(themesArray,peopleArray, historyArray)
{

  let person1 = generateRandompPerson(1)
  let person2 = generateRandompPerson(2)
  let choosenTheme = themesArray[generateNumber(0,themesArray.length-1)]
function generateRandompPerson(number){

    let personNotDecided = true;
    let decider 

    while (personNotDecided == true) {
     decider= peopleArray[generateNumber(0,peopleArray.length-1)]
      
   
     
      let x = generateNumber(0,100)
      if (decider.chance<0) {
        decider.chance =0;
      }
      if (x<=decider.chance) {
        
        personNotDecided = false;

      }
      
    }
    return decider;


   }

   while(person1 == person2){
    person2 = generateRandompPerson(3);
   }

for (let i = 0; i < peopleArray.length; i++) {
 if (peopleArray[i] != person1 && peopleArray[i] != person2) {
  
    if (peopleArray[i].chance>100) {
      peopleArray[i].chance = 99
    }
    else{
      peopleArray[i].chance += generateNumber(0,50)
    }

 }
 else{
  peopleArray[i].chance -= generateNumber(30,60)
 }

  
}


function checkHistory(){
for (let i = 0; i < historyArray.length; i++) {

  if (choosenTheme == historyArray[i]) {
    choosenTheme = themesArray[generateNumber(0,historyArray.length-1)]
    checkHistory();
  }

  
}

if (historyArray.length>4) {
historyArray.pop()

 }
 

 console.log(historyArray)
}
checkHistory();

historyArray.unshift(choosenTheme)


document.getElementById("person2").innerHTML = person2.firstName
document.getElementById("displayTheme").innerHTML = choosenTheme

document.getElementById("person1").innerHTML = person1.firstName



localStorage.setItem("people",JSON.stringify(peopleArray))   
localStorage.setItem("themes",JSON.stringify(themesArray))   
localStorage.setItem("history",JSON.stringify(historyArray))  
 
updatePeopleThemes();




}