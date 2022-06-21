var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(Number(input1.value), Number(input2.value)));
});
