window.document.title = "Hello World";
console.dir(window.document.images);

let Items = document.querySelector('.items');
let Form = document.querySelector('form.form');
let InputBox = document.querySelector('input.insert-text');
let LiveInput = document.querySelector('#live-input');

//Function
const createItem = ( item_text ) => {
    let item = document.createElement('li');
    let itemText = document.createTextNode(item_text);

    //Adding text in UL list
    item.appendChild(itemText);

    return item;
}



const addItem = () => {
    let inputText = InputBox.value;
    if(inputText !== ''){
        let item = createItem(inputText);//insert-text

        Items.appendChild(item);
    }else{
        alert("Please Input text in inputbox.");
    }
    
    InputBox.value = "";
}

const itemFinalized = () => {
    let inputText = InputBox.value;
    if(inputText !== ''){
        let last_item = document.querySelector('.last-item');
        last_item.classList.remove('last-item');
    }else{
        alert("Please Input text in inputbox.");
    }
    InputBox.value = "";
    
}

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    itemFinalized();
    
});

InputBox.addEventListener('focus',()=>{
    let last_item_class = 'last-item';
    let alreadEmptyItem = document.querySelector('.' + last_item_class);
    if(!alreadEmptyItem){
        let emptyLi = createItem(InputBox.value);
        emptyLi.className= last_item_class + ' item';
        console.log(emptyLi.classList);
        Items.appendChild(emptyLi);
    }
});
InputBox.addEventListener('focusout',()=>{
    let last_item_class = 'last-item';
    let alreadEmptyItem = document.querySelector('.' + last_item_class);

    if(alreadEmptyItem && alreadEmptyItem?.innerHTML === ''){
        alreadEmptyItem.remove();
    }
});
InputBox.addEventListener('keyup',function(){
    let lastItem = document.querySelector('.last-item');
    if(!lastItem) return;
    let lastItemText = document.createTextNode(this.value);
    lastItem.innerHTML = this.value;//lastItemText;
});