let input = document.querySelector('input');
let left_btn = document.querySelector('#left_sidebar_opener-container1');
let right_btn = document.querySelector('#right_sidebar_opener-container1');
let ion_icons = document.querySelectorAll('ion-icon');
let original_attr;








// ion_icons.forEach(cross => {
    
//     let op = cross.getAttribute(name);
//     cross.addEventListener('click', ()=>{
        
//         original_attr = cross.getAttribute('name');
//         // console.log(op);
//         // console.log(original_attr);
//         if (cross.getAttribute('name')=='close-outline') {
//             console.log('d8tdti');
//             cross.setAttribute('name',`${original_attr}`);
//             console.log(original_attr);
        
//         }
        
//         cross.setAttribute('name','close-outline');
        
//     })
// })




















left_btn.addEventListener('click',()=>{
    console.log('Left button clicked');
})
right_btn.addEventListener('click',()=>{
    console.log('Right button clicked');
})



































function inputdata() {
    let texts=input.value;
    console.log(texts);

}

// inputdata();

let text = 'class="Hello bro"';
let result;
if (text.includes ('Hello')) {
    result = text.replace(/class/g,'Mello Mello')
}

console.log(result);
                                                                                                                                                                
