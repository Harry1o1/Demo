let input = document.querySelector('input');


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
