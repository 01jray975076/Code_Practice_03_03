import { Tabs } from './components/tabs.js';
import { Dropdown } from './components/dropdown.js';
import { Modal } from './components/modal.js';
import { Toast } from './components/toast.js';
import { Accordion } from './components/accordion.js';
import { createStore } from './core/store.js';
document.addEventListener('DOMContentLoaded', () => {
// THEME STORE 
const uiStore = createStore({ theme: 'light' })
uiStore.subscribe(state => {
    document.documentElement.dataset.theme = state.theme;
});
document.addEventListener('click', e => {
    if (e.target.matches('[data-toggle-theme]')) {
        const next = uiStore.getState().theme === 'light' ? 'dark' : 'light';
        uiStore.setState({ theme: next });
        localStorage.setItem('theme', next);
    }
});
const saved = localStorage.getItem('theme');
if (saved) uiStore.setState({ theme: saved });
// INIT COMPONENTS 
document.querySelectorAll('.tabs').forEach(root => new Tabs(root));                                         
document.querySelectorAll('.dropdown').forEach(root => new Dropdown(root));                                         
document.querySelectorAll('.accordion').forEach(root => new Accordion(root));
// MODAL 
const modal = new Modal(document.querySelector('.modal'));
document.querySelector('[data-open-modal]')
    .addEventListener('click', () => modal.open());
// TOAST 
const toast = new Toast();
toast.show('UI Kit Loaded');                                         
});