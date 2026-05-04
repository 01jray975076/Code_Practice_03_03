const items = document.querySelectorAll(".accordion-item");
items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-item.active");
        // Close previously open item
        if (openItem && openItem !== item) {
            openItem.classList.remove("active");
            openItem.querySelector(".accordion-content").style.maxHeight = 0;
        }
        // Toggle current item
        item.classList.toggle("active");
        const content = item.querySelector(".accordion-content");
        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });
});