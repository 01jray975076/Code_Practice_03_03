const listeners = new Map();
export function on(event, handler) {
    if (!listeners.has(event)) listeners.set(event, new Set());
    listeners.get(event).add(handler);
}
export function emit(event, payload) {
    listeners.get(event)?.forEach(fn => fn(payload));
}