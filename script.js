const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const closeMenu = document.getElementById("closeMenu");

function setMenu(open) {
  if (!menuToggle || !sideMenu || !menuBackdrop) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  sideMenu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  sideMenu.classList.toggle("open", open);
  menuBackdrop.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
}
if (menuToggle) menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});
if (closeMenu) closeMenu.addEventListener("click", () => setMenu(false));
if (menuBackdrop) menuBackdrop.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenu(false);
});
document.querySelectorAll(".side-nav a").forEach(link => link.addEventListener("click", () => setMenu(false)));

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) bookingForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const subject = encodeURIComponent("Haus of Mira booking enquiry");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail or phone: ${data.get("email")}\nService: ${data.get("service")}\nDetails: ${data.get("details") || "Not provided"}`
  );
  window.location.href = `mailto:hausofmira@gmail.com?subject=${subject}&body=${body}`;
});
