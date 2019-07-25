console.log('js');

function addinator (num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

console.log('When I pass in 1 and 2 I expect 3. The result was: ', addinator(1, 2));

console.log('When I pass in -1 and 2 I expect 1. The result was: ', addinator(-1, 2));

console.log('When I pass in 1.5 and 1 I expect 2.5. The result was: ', addinator(1.5, 1));

console.log('When I pass in "1" and "2" I expect 3. The result was: ', addinator('1', '2'));