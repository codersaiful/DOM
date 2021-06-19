
let inputBox = document.querySelector('#myInput');
let addButton = document.querySelector('.addBtn');

let myUlItem = document.querySelector('#myUL');
let myLi = document.querySelector('li');

const createNewLi = (inputedText) => {
    let listItem = document.createElement('Li');
    let itemText = document.createTextNode(inputedText);
    listItem.appendChild(itemText);

    let close = document.createElement('span');
    close.setAttribute('class','close');
    close.innerHTML='×';

    listItem.appendChild(close);

    return listItem;
}

const addLi = () => {
    let todoText = inputBox.value;
    myUlItem.appendChild(createNewLi(todoText));
    inputBox.value="";
    inputBox.focus();
}

/**
 * Need more practice on Event trigger and dispatchEvent
 * @link https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
 */
const myEvnt = new Event('test-event');
const myCusEvnt = new CustomEvent('test-event');


addButton.addEventListener('click',()=>{
    
    addLi();
});
inputBox.addEventListener('keyup',(e)=>{
    e.preventDefault();
    if(e.keyCode === 13){
        addLi();
    }
});




myUlItem.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target){

    }
    e.target.setAttribute('class','checked');
    console.dir(e.target);
    console.log(e.target);
    // e.target.style.display = "none";
});