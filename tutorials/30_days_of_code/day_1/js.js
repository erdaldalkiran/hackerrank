var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    const i = 4
    const d = 4.0
    const s = "HackerRank "

    const myInt = parseInt(readLine());
    const myDouble = parseFloat(readLine());
    const myStr = readLine();


    console.log(i + myInt);
    console.log((d + myDouble).toFixed(1));
    console.log(s + myStr);

}