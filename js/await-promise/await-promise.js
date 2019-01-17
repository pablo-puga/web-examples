
const calculate = (a, b) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(parseFloat(a) + parseFloat(b)), 5000)
    });
};

(async (a, b) => {
    let result = await calculate(a, b);
    document.getElementById('result').innerHTML = result;
})(document.getElementById('a').innerText, document.getElementById('b').innerText);
