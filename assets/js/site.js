
    document.getElementById('year').textContent = new Date().getFullYear();
    const menuButton = document.getElementById('menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    function closeMenu(){mobileNav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');menuButton.textContent='☰';}
    menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';mobileNav.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menuButton.textContent=open?'×':'☰';});
    mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileNav.classList.contains('is-open')){closeMenu();menuButton.focus();}});
    const form=document.getElementById('contact-form');
    form.addEventListener('submit',event=>{event.preventDefault();const feedback=document.getElementById('form-feedback');if(!form.checkValidity()){form.reportValidity();feedback.textContent='Preencha os campos para continuar.';return;}const data=new FormData(form);const text=`Olá, Arthon! Meu nome é ${data.get('name')}.\nE-mail: ${data.get('email')}\n\n${data.get('message')}`;const url='https://wa.me/5586995137002?text='+encodeURIComponent(text);feedback.textContent='Abrindo o WhatsApp para você revisar e enviar a mensagem.';window.location.href=url;});

    // Animate cards as they enter the viewport. Unobserve after visible to pause off-screen.
    if (document.documentElement.classList.contains('scroll-reveal')) {
      const revealElements = document.querySelectorAll('.reveal, .reveal-zoom, .reveal-fade');
      try {
        const revealObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        }, {rootMargin: '0px 0px -8% 0px', threshold: 0.08});
        revealElements.forEach(el => revealObserver.observe(el));
      } catch (error) {
        document.documentElement.classList.remove('scroll-reveal');
      }
    }
