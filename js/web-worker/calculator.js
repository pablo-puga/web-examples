const log = string => console.log('Main Script: ' + string);

if (window.Worker) {
    log('Worker capability detected');
    let calculatorWorker = new Worker('worker.js');
    let form = document.getElementById('calculator');

    calculatorWorker.onmessage = event => {
        log('message received from worker');
        if (!event.data) return;
        if (event.data.error) console.error(event.data.error);
        document.getElementById('result').innerHTML = event.data.result;
    };

    document.getElementById('operation').addEventListener('change', event => {
        switch(event.target.value) {
            case 'addition':
                document.getElementById('sign').innerHTML = '+';
                break;
            case 'subtraction':
            document.getElementById('sign').innerHTML = '-';
                break;
            case 'multiplication':
                document.getElementById('sign').innerHTML = '*';
                break;
            case 'division':
                document.getElementById('sign').innerHTML = '/';
                break;
        }
    });

    form.addEventListener('change', event => {
        let operation = form.elements['operation'].value;
        let op1 = form.elements['op1'].value;
        let op2 = form.elements['op2'].value;
        log('message sent to worker');
        calculatorWorker.postMessage({ operation: operation, op1: op1, op2: op2 });
        document.getElementById('result').innerHTML = 'calculating...';
    });
} else {
    log('Worker is not available in this browser');
}