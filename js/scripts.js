// Assignment 2 | COMP1073 Client-Side JavaScript

// Author: Shaine Poirier
// Date: 2023-10-14

// constants for query selector
const customNumber = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randcolor");
const studentId = document.getElementById("myStudentId");
const imageList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
const imageSelect = document.getElementById("imageSelect");

// function to change bg color from user input and add student id
function changeCustomColor() {
    //Show student number
    studentId.textContent = "Student ID: 200317756";

    const userNumber = parseInt(customNumber.value);
    var pageBg;
    //Changes background colour based on the value the user selected
    switch (true){
        case userNumber < 0 || userNumber > 100:
            pageBg = "red";
            break;
        case userNumber >= 0 && userNumber < 20:
            pageBg = "green";
            break;
        case userNumber >= 20 && userNumber < 40:
            pageBg = "blue";
            break;
        case userNumber >= 40 && userNumber < 60:
            pageBg = "orange";
            break;
        case userNumber >= 60 && userNumber < 80:
            pageBg = "purple";
            break;
        //if it is above 80 it will be yellow
        default:
            pageBg = "yellow";
    }
    //Change the background colour
    document.body.style.backgroundColor = pageBg;
}
//function to generate random number between 1-100
function randomValue(){
    return Math.floor(Math.random() * 100) + 1;
}
// function to change bg color from random no.
function changeRandomColor() {
    //Store random number from 1-100
    var randomNumber = randomValue();
    //Update the customNumber to hold the newly generated random number
    customNumber.value = randomNumber;
    //Run the changecustomcolor function with the new customNumber value
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
    //Generate the options in the drop-down selector and add it to our application.
    for(let i = 0; i < imageList.length; i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = "Image " + (i + 1);
        imageSelect.appendChild(option);
    }
}
//Run the function to create and add the image choices
addList();

// function to change image
function changeImage() {
    const selectedIndex = imageSelect.selectedIndex;
    //If the option chosen is "Please choose" No image should show
    if (selectedIndex === 0) {
        document.getElementById("images").src = "";
    } else {
        //The array starts at 0, this fixes that issue so image 1 is imj1.jpg
        const adjustedIndex = selectedIndex - 1;
        const imageName = imageList[adjustedIndex];
        //Find and load the appropriate image
        document.getElementById("images").src = "img/" + imageName;
    }
}


// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);
