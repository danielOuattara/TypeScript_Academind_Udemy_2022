import axios from "axios";

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "to_be_defined";

type ResType = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
  status: "OK" | "ZERO_RESULTS";
};
//

function searchAddress(event: SubmitEvent) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  //send request to google API
  axios
    .get<ResType>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress,
      )}&key=${GOOGLE_API_KEY}`,
    )
    .then((res) => {
      console.log(res);
      if (!res.data.status) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const coordinates = res.data.results[0].geometry.location;
    })
    .catch((error) => console.log(error));
}

form.addEventListener("submit", searchAddress);
