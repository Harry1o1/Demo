'use strict';
import { Robin } from './src/toogle/robin.js';
// import { Notes_page } from './tod/notes.js';//Update later





//                                All variables
const d = (e)=> {
    return document.querySelector(e);
}
const da = (e)=> {
    return document.querySelectorAll(e);
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
    drop_downoff = d('.cross2'),
    arrows = da('.arrows'),
    l_arrow=d('#left-arrow'),
    r_arrow=d('#right-arrow'),
    ptli=d('.ptli')
    
    








    toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
    })
    
    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Buyer Mode";
        }else{
            modeText.innerText = "Seller Mode";
            
        }
    });





if (toggle != null && sidebar != null && modeSwitch != null && modeText != null && op != null && drop_downon !=  null && drop_down != null && arrows != null) {
    console.log('toggle');
    // let index = 0; 
    // drop_down.addEventListener('click', ()=> {
    //     // drop_downon.style.display=block;
    //     // drop_downoff.style.display=none;
    //     console.log('op');
        
        
        
    // })
    // drop_down.addEventListener('click', ()=> {
    //     console.log('op');
    //     drop_downon.style.display='none';
    //     drop_downoff.style.display='block';
        

    // })
    
    
    
    // arrows.dblclick = () => {
    //     console.log('op');
    // }
    window.addEventListener('dblclick', ()=>{
        // console.log('op');
    })
    l_arrow.addEventListener('click',()=>{
        
        // let index = index !== 0 ? index-1 : 2;
        // let indexf = () => {
        //     let index = 1;
        //     index++;
            
        //     console.log(index);
        //     return index;
        // }
        // indexf();
        // console.log('l');
        // console.log(indexf);
        // indexf();
        // ptli.style.translateX='10%';
        // ptli.style.backgroundr='green';
        // ptli.style.display='none';
        
        body.style.background='red';
        body.style.transform='translateY(-40px)';
        ptli.style.transform='translateX(-150px)';
        
        // arrows.style.background='red';
        
        // console.log(ptli);
        // ptli.onfocus=()=>{
        //     console.log('op');
        // 
        // console.log('op');
        
    })
    r_arrow.addEventListener('click',()=>{
        // let index = 0;
        // let index = index !== 0 ? index+1 : 0;
        
        // console.log(index);
        body.style.background='yellow';
        body.style.transform='translateY(40px)';
        ptli.style.transform='translateX(90%)';
        
        console.log('r');
        ptli.style.translateX='-70px';
        
    })
    
    
}
else{
    console.log('no');
}

















// Others😅😅😅
console.log(body.clientHeight);
Robin('Hello Robin bro')
