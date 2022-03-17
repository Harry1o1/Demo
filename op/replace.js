let text = 'Helli bra ko haal chaall';

if (text.includes('Helli')) {
    console.log('genius');
}

if (text.includes('Hello')) {
    console.log('Something went wrong');
}
else{
    console.log('That what I wanted');
}

let replace = text.replace('Helli','Hello');




console.log(replace);
