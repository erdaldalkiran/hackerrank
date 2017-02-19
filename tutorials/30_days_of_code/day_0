function processData(inputString){
    console.log('Hello, World.');
    console.log(inputString);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = '';

process.stdin.on('data', function (data) {
    _input += data; 
});

process.stdin.on('end', function () {
    processData(_input);
});


