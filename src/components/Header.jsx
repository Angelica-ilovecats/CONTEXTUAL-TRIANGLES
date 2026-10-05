import { useState } from 'react';
import { withBasePath } from '../utils/paths.js';

const links = [
  { label: 'Home', href: '/' },
  { label: 'My works', href: '/works' },
  { label: 'Interesting things', href: '/interesting' },
  { label: 'Works of others', href: '/others' },
];

export default function Header({ onNavigate, activePath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const follow = (event, href) => {
    setMenuOpen(false);
    onNavigate(event, href);
  };

  return (
    <header className="site-header">
      <a className="wordmark" href={withBasePath('/')} onClick={(event) => follow(event, '/')}>Angelica Jin</a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <nav id="site-navigation" className={`site-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map(({ label, href }) => (
          <a key={href} href={withBasePath(href)} aria-current={activePath === href ? 'page' : undefined} onClick={(event) => follow(event, href)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
