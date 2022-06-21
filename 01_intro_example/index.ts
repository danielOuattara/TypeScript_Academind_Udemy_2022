const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number = 0, num2: number = 0) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(Number(input1.value), Number(input2.value)));
});
