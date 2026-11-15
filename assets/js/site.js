(() => {
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('navlinks');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    }));
  }
  const original = document.getElementById('original-diagram');
  const dialog = document.getElementById('diagram-dialog');
  const big = document.getElementById('large-diagram');
  const closeButton = document.getElementById('close-diagram');
  if (original && dialog && big && closeButton) {
    const open = () => {
      big.src = original.src;
      if (!dialog.open) dialog.showModal();
    };
    original.addEventListener('click', open);
    original.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  }
})();
