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
    op = 2005,
    drop_down = d('.drop-down'),
    drop_downon = d('.cross1'),
    drop_downoff = d('.cross2')
    
    








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





if (toggle != null && sidebar != null && modeSwitch != null && modeText != null && op != null && drop_downon !=  null && drop_down != null) {
    console.log('toggle');
    
    drop_down.addEventListener('click', ()=> {
        // drop_downon.style.display=block;
        // drop_downoff.style.display=none;
        console.log('op');
        
        
        
    })
    drop_down.addEventListener('click', ()=> {
        console.log('op');
        drop_downon.style.display='none';
        drop_downoff.style.display='block';
        

    })
    
    
}
else{
    console.log('no');
}

















// Others😅😅😅
console.log(body.clientHeight);
Robin('Hello Robin bro')
