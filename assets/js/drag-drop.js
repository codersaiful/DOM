
let dragContainer = document.querySelector('.box');
let outBox = document.querySelector('.box-1');
let innerBox = document.querySelector('.box-2');

let dragBox = document.querySelector('.drag-box');


let dragClass = 'dragging-item';
outBox.addEventListener('dragstart',function(event){

    event.dataTransfer.setData('target-element-id',event.target.id);
    event.target.classList.add(dragClass)
});
dragBox.addEventListener('dragend',function(){
    this.classList.remove(dragClass)
});


innerBox.addEventListener("dragenter", function(event) {
    if(event.target.classList.contains('box-2')){
        event.target.style.border = "3px solid red";
    }
    
});

innerBox.addEventListener("dragleave", function(event) {

    if(event.target.classList.contains('box-2')){
        event.target.style.border = "3px solid black";
    }
    
});


//By default, data/element cannot be drop, need preventDefault()
document.addEventListener('dragover',function(event){
    event.preventDefault();
});

innerBox.addEventListener('drop',function(event){
    if( event.target.classList.contains('box-2') ){
        event.preventDefault();
        let targetBox = event.target;
        let draggedItemId = event.dataTransfer.getData("target-element-id");
        let draggedItem = document.getElementById(draggedItemId);
        draggedItem.setAttribute('draggable','false');
        targetBox.appendChild(draggedItem);
        // targetBox.innerHTML = "Saiful";
        targetBox.style.border = "3px solid black";
    }
    
});



//Functions
