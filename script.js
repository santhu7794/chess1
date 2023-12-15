// function X() {
//     document.getElementById("1").innerHTML = ""
//     document.getElementById("2").innerHTML='X'

// }

// function O(){
//     document.getElementById("2").innerHTML = "X"
//     document.getElementById("3").innerHTML='X'

// }
// function t(){
//     document.getElementById("3").innerHTML = "X"
//     document.getElementById("4").innerHTML='X'
// }

// function X1() {
//     document.getElementById("4").innerHTML = ""

//     document.getElementById("1").innerHTML='X'

// }
// function O1(){
//     document.getElementById("5").innerHTML = ""
//     document.getElementById("6").innerHTML=''

// }
// function t1(){
//     document.getElementById("6").innerHTML = ""
//     document.getElementById("7").innerHTML = ""

// }
// function X2() {
//     document.getElementById("7").innerHTML = ""
//     document.getElementById("8").innerHTML = "X"
// }
// function O2(){
//     document.getElementById("8").innerHTML = ""
//     document.getElementById("9").innerHTML = ""
// }
// function t2(){
//     document.getElementById("9").innerHTML = ""
// }
let currentPlayer = "X";
let arr = Array(9).fill(null);
function checkWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        alert(`winner is ${currentPlayer}`)
        return;
    }
    if (!arr.some((el) => el === null)) {
        alert(`Draw !!`)
        return;
    }
}
function santhosh(el) {
    const id = Number(el.id);
    if (arr[id] !== null) 
    return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}