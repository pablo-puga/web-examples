const isValidMessage = data => {
    if (!data instanceof Object) return false;
    if (data.operation === undefined) return false;
    if (data.op1 === undefined && isNaN(data.op1)) return false;
    if (data.op2 === undefined && isNaN(data.op2)) return false;
    return true;
};

const log = string => console.log('Worker: ' + string);

onmessage = event => {
    log('message received from main script');
    if (!event.data || event.data === undefined || !isValidMessage(event.data)) {
        log('invalid data received');
        postMessage({ error: 'Invalid data received '});
    }

    let result = 'undefined';
    let data = event.data;
    switch(data.operation) {
        case 'addition':
            result = Number(data.op1) + Number(data.op2);
            break;
        case 'subtraction':
            result = Number(data.op1) - Number(data.op2);
            break;
        case 'multiplication':
            result = Number(data.op1) * Number(data.op2);
            break;
        case 'division':
            if (Number(data.op2) === 0) {
                log('division by 0 detected');
                result = 'infinit';
                break;
            }
            result = Number(data.op1) / Number(data.op2);
            break;
        default:
            log('unknown requested operation');
            postMessage({ error: 'Unknown requested operation' });
            return;
    }

    //We emulate some difficult operations
    setTimeout(() => {
        postMessage({ result: result });
    }, 3000);
};