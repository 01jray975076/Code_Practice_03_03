export class Accordion {
  constructor(root) {
    this.root = root;
    this.items = [...root.querySelectorAll('.accordion__item')];

    this.root.addEventListener('click', e => {
      const header = e.target.closest('.accordion__header');
      if (!header) return;

      const item = header.parentElement;
      item.classList.toggle('open');
    });
  }
}