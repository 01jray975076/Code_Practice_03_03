export class Tabs {
  constructor(root) {
    this.root = root;
    this.tabs = [...root.querySelectorAll('[role="tab"]')];
    this.panels = [...root.querySelectorAll('[role="tabpanel"]')];

    this.onClick = this.onClick.bind(this);
    this.onKeydown = this.onKeydown.bind(this);

    root.addEventListener('click', this.onClick);
    root.addEventListener('keydown', this.onKeydown);
  }

  onClick(e) {
    const tab = e.target.closest('[role="tab"]');
    if (tab) this.activate(tab.id);
  }

  onKeydown(e) {
    const idx = this.tabs.indexOf(document.activeElement);
    if (idx === -1) return;

    let next = null;
    if (e.key === 'ArrowRight') next = (idx + 1) % this.tabs.length;
    if (e.key === 'ArrowLeft') next = (idx - 1 + this.tabs.length) % this.tabs.length;

    if (next != null) {
      e.preventDefault();
      this.tabs[next].focus();
      this.activate(this.tabs[next].id);
    }
  }

  activate(id) {
    this.tabs.forEach(tab => {
      const selected = tab.id === id;
      tab.setAttribute('aria-selected', selected);
      tab.tabIndex = selected ? 0 : -1;
    });

    this.panels.forEach(panel => {
      const show = panel.getAttribute('aria-labelledby') === id;
      panel.hidden = !show;
    });
  }
}