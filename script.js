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
    }
}
