export function createStore(initial = {}) {
    let state = { ...initial };
    const subs = new Set();
    const getState = () => state;
    const setState = partial => {
        state = { ...state, ...partial };
        subs.forEach(fn => fn(state));
    };
    const subscribe = fn => {
        subs.add(fn);
        fn(state);
        return () => subs.delete(fn);
    };
    return { getState, setState, subscribe };
}