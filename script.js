const form = document.getElementById("signup");
const success = document.getElementById("success");

function setError(id, message) {
  const field = document.getElementById(id);
  const error = form.querySelector(`.error[data-for="${id}"]`);
  error.textContent = message;
  field.classList.toggle("invalid", Boolean(message));
  return !message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = form.elements;
  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const password = fields.password.value;
  const confirm = fields.confirm.value;

  const results = [
    setError("name", name ? "" : "Please enter your name."),
    setError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Please enter a valid email."),
    setError("password", password.length >= 8 ? "" : "Password must be at least 8 characters."),
    setError("confirm", confirm && confirm === password ? "" : "Passwords do not match."),
    setError("terms", fields.terms.checked ? "" : "You must accept the terms."),
  ];

  if (results.every(Boolean)) {
    // Static demo: no backend, nothing is stored or sent.
    form.hidden = true;
    success.hidden = false;
  }
});
