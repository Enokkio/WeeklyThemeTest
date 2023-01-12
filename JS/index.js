
let peopleArray = [];
let themesArray = [];
let historyArray = [];





function setup()
{

    
//Checks for localstorages
if (localStorage.getItem("people") === false)
 {
    localStorage.setItem(people,peopleArray)   
    peopleArray = localStorage.getItem("people")
    // console.log("people does not exist")

 }
 else{
    peopleArray = localStorage.getItem("people")
    // console.log("people exist")

 }


 if (localStorage.getItem("themes") === false)
 {
    localStorage.setItem(themes,themesArray)   
    peopleArray = localStorage.getItem("themes")


 }
 else{
    peopleArray = localStorage.getItem("themes")
 }


 if (localStorage.getItem("history") === false)
 {
    localStorage.setItem(history,historyArray)   
    peopleArray = localStorage.getItem("history")


 }
 else{
    peopleArray = localStorage.getItem("history")
 }



console.log("successfully run setup")
}

setup()
