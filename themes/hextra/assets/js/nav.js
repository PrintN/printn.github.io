const dots = document.querySelectorAll('.nav-dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const target = document.getElementById(dot.dataset.target);
        
        if (dot.dataset.target === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        
        history.pushState(null, null, `#${dot.dataset.target}`);
    });
});

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    
    document.querySelectorAll('section').forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            dots.forEach(d => d.classList.remove('active'));
            dots[i].classList.add('active');
        }
    });
});