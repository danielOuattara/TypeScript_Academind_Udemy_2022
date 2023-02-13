/* Functions Types & CallBack 
================================ */

// callback defined as the 3rd parameter

function add_3(n1: number, n2: number, cb: (numb: number) => void) {
  const result = n1 + n2;
  cb(result);
}

add_3(10, 20, (output) => {
  console.log(output);
});

//

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

// Does compile with no Error
sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
