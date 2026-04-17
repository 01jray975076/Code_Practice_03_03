export function debounce(fn, delay = 200) {
    let id;
    return (...args) {
        clearTimeout(id);
        id = setTimeout(() => fn(...args), delay);
    };
}
export function throttle(fn, limit = 200) {
    let waiting = false;
    return (...args) => {
        if (!waiting) {
            fn(...args);
            waiting = true;
            setTimeout(() => (waiting = false), limit);
        }
    };
}