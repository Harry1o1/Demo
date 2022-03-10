'use strict';
import { Robin } from './src/toogle/robin.js';
// import { Notes_page } from './tod/notes.js';//Update later





//                                All variables
const d = (e)=> {
    return document.querySelector(e);
}


let html = d('html'),
    body = d('body'),
    sidebar = d('#pro-navbartop-sidebar'),
    toggle = d('#pntcg1'),
    modeSwitch = d('.toggle-switch'),
    modeText = d('.mode-text'),
    op = 2005
    
    








    toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
    })
    
    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
            
        }
    });





if (toggle != null && sidebar != null && modeSwitch != null && modeText != null && op != null) {
    console.log('toggle');
}
else{
    console.log('no');
}

















// Others😅😅😅
console.log(body.clientHeight);
Robin('Hello Robin bro')