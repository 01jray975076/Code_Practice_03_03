export function lazyLoad(selector = '[data-lazy]') {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry, isIntersecting) return;
            const el = entry.target;
            const src = el.dataset.src;
            if (src) {
                el.src = src;
                el.removeAttribute('data-lazy');
            }
            observer.unobserve(el);
        });
    });
    elements.forEach(el => observer.observe(el));
}