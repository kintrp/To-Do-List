let addToDoButton = document.getElementByID('addToDo');
let toDoContainer = document.getElementByID('toDoContainer');
let inputField = document.getElementByID('inputField');

addToDoButton.addEventListener('click', function(){
   var paragraph = document.createElement('p');
   paragraph.classList.add('paragraph-styling');
   paragraph.innerText = inputField.value;
   toDoContainer.appendChil(paragraph);
   inputfield.value = "";
   paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

})
