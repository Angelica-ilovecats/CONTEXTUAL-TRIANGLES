import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import TriangleNavigation from './components/TriangleNavigation.jsx';
import SectionPage from './pages/SectionPage.jsx';
import { routeFromLocation, withBasePath } from './utils/paths.js';
import './styles.css';

function App() {
  const [path, setPath] = useState(routeFromLocation(window.location.pathname));
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const onPopState = () => { setPath(routeFromLocation(window.location.pathname)); setLeaving(false); };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (event, href) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (href === path) return;
    setLeaving(true);
    window.setTimeout(() => {
      window.history.pushState({}, '', withBasePath(href));
      setPath(href);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => setLeaving(false));
    }, 250);
  };

  const knownPath = ['/', '/works', '/interesting', '/others'].includes(path);
  return <div className={`app-shell${leaving ? ' is-leaving' : ''}`}>
    <Header onNavigate={navigate} activePath={path} />
    {path === '/' || !knownPath ? <main className="home-page"><div className="home-composition"><TriangleNavigation onNavigate={navigate} /><div className="home-brief" aria-label="Mini brief: Contextual Triangles"><span className="home-brief-label">MINI BRIEF</span><span className="home-brief-title">CONTEXTUAL TRIANGLES</span></div></div></main> : <SectionPage path={path} />}
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
