function submitData(name, email) {
    const formData = {
      name: "Steve",
      email: "steve@steve.com",
    };
    
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData)
  };
  fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Error!");
    console.log(error.message);
  });
}


