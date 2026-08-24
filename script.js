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

quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formMessage.textContent = "Sending your quote request...";

  const formData = new FormData(quoteForm);

  try {
    const response = await fetch(quoteForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      formMessage.textContent =
        "Thank you! Your quote request has been submitted successfully.";
      quoteForm.reset();
    } else {
      formMessage.textContent =
        "Something went wrong. Please try again or call us.";
    }
  } catch (error) {
    formMessage.textContent =
      "Something went wrong. Please try again or call us.";
  }
});
