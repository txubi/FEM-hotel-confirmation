const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) toggleMenu();
});
