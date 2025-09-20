let form = document.getElementById("myform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");
  if (username === "" || email === "") {
    error.textContent = "All fields are required!";
  } else {
    error.textContent = "";
    alert("Form submitted successfully!");
    // here you could send data to server using fetch()
  }
});
