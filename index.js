function submitData() {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Unauthorized Access");
      }
      return response.json();
    })
    .then(data => {
      appendNewIdToDOM(data.id);
    })
    .catch(error => {
      appendErrorMessageToDOM(error.message);
    });
  }
  
  function appendNewIdToDOM(id) {
    const newElement = document.createElement("div");
    newElement.innerHTML = id;
    document.body.appendChild(newElement);
  }
  
  function appendErrorMessageToDOM(message) {
    const errorElement = document.createElement("div");
    errorElement.innerHTML = message;
    document.body.appendChild(errorElement);
  }
  