import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './Lanyard';
import './portfolio.css';

const host = document.getElementById('portfolio-lanyard');
const asset = name => new URL(`../../assets/images/${name}`, import.meta.url).href;

function PortfolioLanyard() {
  const wrapper = useRef(null);
  useEffect(() => {
    const surface = document.getElementById('inicio');
    const observer = new MutationObserver(() => {
      if (surface?.querySelector('.lanyard-canvas')) {
        host.classList.add('is-ready');
        observer.disconnect();
      }
    });
    observer.observe(surface, { childList: true, subtree: true });
    if (surface.querySelector('.lanyard-canvas')) host.classList.add('is-ready');
    return () => observer.disconnect();
  }, []);
  return <div ref={wrapper} className="portfolio-lanyard-scene">
    <Lanyard
      frontImage={asset('card-front.png')}
      backImage={asset('card-back.png')}
      strapImage={asset('band.png')}
      renderArea="#inicio"
      anchor="center"
      cardColor="#271a36"
      strapColor="#7444a2"
      metal="silver"
      finish="glossy"
      size={0.72}
      strapLength={0.4}
      strapWidth={0.65}
      breeze={0.12}
      damping={0.65}
      interactive
      intro
    />
  </div>;
}

// Keep the HTML fallback visible when WebGL is unavailable.
if (host) createRoot(host.querySelector('.portfolio-lanyard-mount')).render(<PortfolioLanyard />);
