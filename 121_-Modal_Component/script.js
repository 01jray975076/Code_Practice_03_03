const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
});
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});