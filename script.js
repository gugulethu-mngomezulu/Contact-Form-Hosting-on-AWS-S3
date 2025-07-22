document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const successMsg = document.getElementById("successMessage");

  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  })
    .then(() => {
      successMsg.style.display = "block";
      form.reset();
    })
    .catch(() => {
      alert("❌ Failed to send. Please check your connection or try again.");
    });
});
