export class Modal {
    constructor(root) {
        this.root = root;
        this.closeBtn = root.querySelector('[data-close]');
        this.previousFocus = null;
        this.onKeydown = this.onKeydown.bind(this);
        this.close = this.close.bind(this);
        this.closeBtn.addEventListener('click', this.close);
    }
    open() {
        this.previousFocus = document.activeElement;
        this.root.hidden = false;
        this.root.querySelector('button, [href], input')?.focus();
        document.addEventListener('keydown', this.onKeydown);
    }
    close() {
        this.root.hidden = true;
        document.removeEventListener('keydown', this.onKeydown);
        this.previousFocus?.focus();
    }
    onKeydown(e) {
        if (e.key === 'Escape') this.close();
    }
}