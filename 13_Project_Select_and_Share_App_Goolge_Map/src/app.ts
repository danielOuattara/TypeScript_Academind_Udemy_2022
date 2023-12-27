// Code goes here!

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddress(event: SubmitEvent) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  //send request to google API
}

form.addEventListener("submit", searchAddress);
