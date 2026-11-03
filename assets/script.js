const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".writeup-card");
const count = document.getElementById("writeupCount");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  let visible = 0;
  cards.forEach(card => {
    const show = filter === "all" || card.dataset.platform === filter;
    card.hidden = !show;
    if (show) visible++;
  });
  count.textContent = `${visible} ARTICLE${visible === 1 ? "" : "S"}`;
}));
document.getElementById("year").textContent = new Date().getFullYear();
