

var currentFormVisibilityStatus = false;

// ----------------------------------Save note in the case--------------------------------//

function SaveNotes() {  //defines the function
    var category = document.getElementById("slSearchCategory").value; //takes the reference ID value for var
    var todo = document.getElementById("txtToDo").value;//takes the reference ID value for var

    if (category == "") {// Alert box  
        alert("Selectionnez une catégorie !");  //opens a dialog box
        return; //stop alert
    }

    var storage = JSON.parse(localStorage.getItem('ToDoList'));//takes the reference ID value for var
    var arrayLength = storage.length;                            

    storage[arrayLength] = category;
    storage[arrayLength + 1] = todo;
    localStorage.setItem('ToDoList', JSON.stringify(storage));      
    category = ""; //empty
    loadNotes();   
    clearNote();
}


// ----------------------------------Clear note in the case-------------------------------//

function clearNote() {  //defines the function
    var todo = document.getElementById("txtToDo"); //takes the reference ID value for var
    todo.value = '';   //empty 
}



// ----------------------------------Load notes with colors-------------------------------//

function loadNotes() { //defines the function
    var storage = JSON.parse(localStorage.getItem('ToDoList'));//takes the reference ID value for var

    if (!storage) {
        storage = []; //empty
        localStorage.setItem('ToDoList', JSON.stringify(storage)); //if storage is empty sets the value
    }

    var displayArea = document.getElementById("displayArea");//takes the reference ID value for var
    var currentFilter = document.getElementById("slSearchCategory").value;//takes the reference ID value for var
    var innerDiv = ""; //empty the variable
    for (var i = storage.length - 1; i >= 0; i = i - 2) {
        if (currentFilter == storage[i - 1] || currentFilter == "") {
            switch (storage[i - 1]) {
                case 'Personnel':             //set the box
                    todoColor = 'A7B4EB';     //colors case Personnel
                    break;                    //Divides the case
                case 'Travail':
                    todoColor = 'A39DD9';      //colors case Travail 
                    break;
                case 'Paiements':
                    todoColor = 'A086C4';      //colors case Paiements
                    break;
                case 'Courses':
                    todoColor = '9E6FAC';     //colors case Courses
                    break;
            }
            innerDiv += "<div class='displayToDo'  style=' background:#" + todoColor + "'><button class='btn-close btn-close-white' aria-label='Close' onclick='removeMe(" + i + ")'></button>" + storage[i - 1] + " <hr /> " + storage[i] + "</div>";
        }
    }

    if (innerDiv != undefined) {
        displayArea.innerHTML = innerDiv;
    }
    else {
        displayArea.innerHTML = "";  //empty
    }
}

// ----------------------------------Remove Item case-------------------------------//

function removeMe(itemId) {  //defines the function
    var storage = JSON.parse(localStorage.getItem('ToDoList'));  //takes the reference ID value for var
    storage.splice(itemId - 1, 2);
    localStorage.setItem('ToDoList', JSON.stringify(storage));
    loadNotes();
}


// ----------------------------------Edit Item case-------------------------------//
// function editText() {
//     var str = document.getElementById("txtToDo").innerHTML; 
//     str = str.replace("input à choisir");
//     document.getElementById("txtToDo").innerHTML = str;
// }







//execute the script 
onload = function () { 
    loadNotes();
    ShowHideForm();
}
