import { useState } from 'react';
import { HOME_TRIANGLES } from '../data/homeTriangles.js';
import { withBasePath } from '../utils/paths.js';

export default function TriangleNavigation({ onNavigate }) {
  const [active, setActive] = useState(null);
  return (
    <nav className={`triangle-nav${active ? ' has-active' : ''}`} aria-label="Portfolio sections" onMouseLeave={() => setActive(null)}>
      {HOME_TRIANGLES.map((item) => (
        <a
          className={`triangle-item triangle-${item.position}${active === item.id ? ' is-active' : ''}`}
          key={item.id}
          href={withBasePath(item.href)}
          aria-label={item.label}
          onMouseEnter={() => setActive(item.id)}
          onFocus={() => setActive(item.id)}
          onBlur={() => setActive(null)}
          onClick={(event) => onNavigate(event, item.href)}
          style={{ '--object-position': item.objectPosition }}
        >
          <img src={withBasePath(item.image)} alt={item.alt} />
          <span className="triangle-title">{item.lines.map((line) => <span key={line}>{line}</span>)}</span>
        </a>
      ))}
      <div className="triangle-center" aria-hidden="true" />
    </nav>
  );
}
