console.dir(window);
console.log(document.title);

//Common Var
let Body = document.body;


/**
 * TITLE CHANGEING USING INPUT
 * 
 * @author Saiful Islam<codersaiful@gmail.com>
 */

let TitleChangeInput = document.querySelector("#title-change-input");

//Adding attribute on body when load site
// let bodyTitleAttr = document.createAttribute('title-backup');
// bodyTitleAttr.value = document.title;
Body.setAttribute('title-backup',document.title);

TitleChangeInput.addEventListener('keyup',function(event){

    event.preventDefault();
    let text = this.value;
    let backupAttr = Body.getAttribute('title-backup');
    if(text == ''){
        text = backupAttr;
    }

    document.title = text;

    //Insert Text in h2
    document.querySelector('.title-change h2').innerHTML = text;
});