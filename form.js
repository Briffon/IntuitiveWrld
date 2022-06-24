const forms = document.getElementsByClassName("php-email-form");
const form = forms[0];
const handleSubmit = (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(
      () => formData.querySelector(".sent-message").classList.add("d-block"),
      formData.reset()
    )
    .catch((error) => alert(error));
};

form.addEventListener("submit", handleSubmit);
