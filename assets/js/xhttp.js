let inputBox = document.querySelector('#xhttp-url-input');
let submitButton = document.querySelector('#xhttp-submit');
let xhttpOutPut = document.querySelector('.xhttp-output');

const sendAjaxReq = ()=>{
       let url = inputBox.value;
       if(!url){
              console.log("Please enter URL.");
            return;  
       }

       let xhttp = new XMLHttpRequest();
       xhttp.open('GET',url);
       xhttp.send();

       xhttp.onreadystatechange = function(hello){
              //console.log(hello);
              if(this.readyState == 4 && this.status == 200){
                     console.log(this.readyState,this.status,this.response);
                     // console.log(this);
                     console.log(this.getAllResponseHeaders());
                     
                     xhttpOutPut.innerHTML = this.response;
              }
       }
       
}


submitButton.addEventListener('click', sendAjaxReq);
inputBox.addEventListener('keyup',function(event){
       event.preventDefault();
       if(event.keyCode == 13){
              sendAjaxReq();
       }
});




/**
 * 
// console.dir(window.XMLHttpRequest);
// console.log(window.XMLDocument);
let xhttp = new XMLHttpRequest();

// console.dir(xhttp);
// console.log(xhttp);

xhttp.open('GET','package.json');
xhttp.send();
console.log(xhttp); 


 */













/**
 * Helper Code
 * $plugin_slug = 'ultraaddons-elementor-lite'; //woo-product-table
        $stats_url = 'https://api.wordpress.org/stats/plugin/1.0/?slug=' . $plugin_slug;
        $info_url = 'http://api.wordpress.org/plugins/info/1.0/' . $plugin_slug . '.json';
        $download_url = 'https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug=' . $plugin_slug;
 */