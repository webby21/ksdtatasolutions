// services.js - Shared JS
// Put at bottom of each page: <script src="services.js"></script>

document.addEventListener('DOMContentLoaded', function(){

  // 1) Read More toggles (expand / collapse)
  document.querySelectorAll('.read-more-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const card = btn.closest('.service-card');
      card.classList.toggle('open');
      btn.textContent = card.classList.contains('open') ? 'Show Less' : 'Read More';
      // smooth scroll into view so extended content is visible
      if(card.classList.contains('open')){
        setTimeout(()=> card.scrollIntoView({behavior:'smooth', block:'nearest'}), 120);
      }
    });
  });

  // 2) Scroll reveal with IntersectionObserver (fade-in)
  const ioOptions = { threshold: 0.12 };
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) { e.target.classList.add('reveal-visible'); revealObserver.unobserve(e.target); }
    });
  }, ioOptions);

  document.querySelectorAll('.service-card, .single-reason').forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    revealObserver.observe(el);
  });

  // add reveal-visible style by class
  const addRevealCSS = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      .reveal-visible{ opacity:1 !important; transform:translateY(0) !important; }
    `;
    document.head.appendChild(style);
  };
  addRevealCSS();

  // 3) Make breadcrumb links clickable (client sites)
  document.querySelectorAll('.breadcrumb a').forEach(a=>{
    a.addEventListener('click', (e)=> {
      // default behaviour: navigate
    });
  });

});
