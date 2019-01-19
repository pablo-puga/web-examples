
const randomString = (length = 10, set = 'ABCDE') => {
    if (length === 0 || set.length === 0) return '';

    let str = '';
    for (let it = 0; it < Math.ceil(length); it++) {
        // We get a random possition inside the set's length
        let possition = Math.floor(Math.random() * set.length); 
        str = str.concat(set.charAt(possition));
    }
    return str;
};

document.getElementById('generate').addEventListener('click', event => {
    document.getElementById('result').innerHTML = 'Generating...';
    event.preventDefault();
    let requestedSet = document.getElementById('set').value;
    let requestedLength = document.getElementById('length').value;
    let generatedString = randomString(requestedLength, requestedSet);
    document.getElementById('result').innerHTML = generatedString;
});