const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

const addTask = () => {
    if(inputBox.value === ''){
        alert('You must write a list Topic!!!') //an alert will pop-up if you click the button but the input field is empty
    }else{ 
        //Below will Execute after you write something
        let li = document.createElement("li")// will create an HTML Element stored inside of li variable
        li.innerHTML = inputBox.value //will display the value of the li variable using innerHTML 
        listContainer.appendChild(li) // this code use the listContainer variable to store the value of li variable
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

//function savaData() is used to save the data in local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

// showTask() is used to display the saved data from local storage
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()