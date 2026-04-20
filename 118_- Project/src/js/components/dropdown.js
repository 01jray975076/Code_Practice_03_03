export class Dropdown {
  constructor(root) {
    this.root = root;
    this.button = root.querySelector('[data-dropdown-button]');
    this.menu = root.querySelector('[data-dropdown-menu]');

    this.onClick = this.onClick.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);

    this.button.addEventListener('click', this.onClick);
    document.addEventListener('click', this.onDocumentClick);
  }

  onClick(e) {
    e.stopPropagation();
    this.menu.hidden = !this.menu.hidden;
  }

  onDocumentClick() {
    this.menu.hidden = true;
  }
}