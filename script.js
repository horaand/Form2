function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const errors = [];
  if (!name) errors.push("Please enter your name.");
  if (!email.includes("@") || !email.includes(".")) errors.push("Please enter a valid email.");
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

  alert(`Welcome, ${name}!`);
}
