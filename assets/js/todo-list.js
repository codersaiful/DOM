
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
    let errorMsgBox = document.querySelector('.error-message');
    if(todoText === ''){
        errorMsgBox.innerHTML="Empty Input box. Please checked.";
        errorMsgBox.style.display = 'block'
        return;
    }
    
    myUlItem.appendChild(createNewLi(todoText));
    inputBox.value=errorMsgBox.innerHTML="";
    errorMsgBox.style.display = 'none'
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
    let element = e.target;
    console.log(e.target.tagName);

    if(element.tagName === 'LI'){
        element.classList.toggle('checked');
        //element.setAttribute('class','checked');
    }else if( element.tagName === 'SPAN' ){
        element.parentElement.remove();
    }
});