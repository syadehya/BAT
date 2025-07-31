// Mobile menu toggle
const mobileBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Scroll to form and preselect product name from product button
function scrollToForm(productName) {
  document.getElementById("order-item").value = productName;
  window.location.hash = "#pesan";

  // For smooth scroll in all browsers
  document.getElementById("pesan").scrollIntoView({ behavior: "smooth" });
}

// Set min date on date picker as today
const dateInput = document.getElementById("date");
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
}

// Show uploaded file name
const productImageInput = document.getElementById("productImage");
const fileNameDisplay = document.getElementById("fileName");

productImageInput.addEventListener("change", () => {
  if (productImageInput.files.length > 0) {
    fileNameDisplay.textContent =
      "File terpilih: " + productImageInput.files[0].name;
  } else {
    fileNameDisplay.textContent = "";
  }
});

// Form submission handler (mock)
const form = document.getElementById("order-form");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data (for future backend submission)
  const formData = new FormData(form);

  // Normally here would be an API call to submit order data

  // Show success message
  formSuccess.textContent =
    "Terima kasih, pesanan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.";
  formSuccess.classList.remove("hidden");

  // Reset form after submission
  form.reset();
  fileNameDisplay.textContent = "";
});
