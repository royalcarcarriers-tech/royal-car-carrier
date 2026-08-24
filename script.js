const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(quoteForm);
  const subject = `Royal Car Carrier Quote Request - ${data.get("vehicle")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email")}`,
    ``,
    `Pickup: ${data.get("pickup")}`,
    `Delivery: ${data.get("delivery")}`,
    `Vehicle: ${data.get("vehicle")}`,
    `Condition: ${data.get("condition")}`,
    `Transport Type: ${data.get("transportType")}`,
    ``,
    `Notes: ${data.get("notes") || "None"}`
  ].join("\n");

  formMessage.textContent = "Opening your email app with the quote details...";
  window.location.href =
    `mailto:info@royalcarcarrier.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
