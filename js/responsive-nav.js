/* Accessible shared mobile navigation; supports both header structures. */
(() => {
  'use strict';
  const header = document.querySelector('header');
  const nav = header?.querySelector('nav');
  if (!header || !nav) return;
  const button = document.createElement('button');
  button.className = 'mobile-menu-toggle';
  button.type = 'button';
  button.setAttribute('aria-label', 'メニューを開く');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'mobile-global-nav');
  button.innerHTML = '<span></span><span></span><span></span>';
  nav.id = 'mobile-global-nav';
  header.appendChild(button);
  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-nav-backdrop';
  backdrop.hidden = true;
  document.body.appendChild(backdrop);
  const setOpen = (open) => {
    document.body.classList.toggle('mobile-nav-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    backdrop.hidden = !open;
    if (open) nav.querySelector('a')?.focus();
    else if (nav.contains(document.activeElement)) button.focus();
  };
  button.addEventListener('click', () => setOpen(!document.body.classList.contains('mobile-nav-open')));
  backdrop.addEventListener('click', () => setOpen(false));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth >= 768) setOpen(false); });
})();
