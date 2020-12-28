import jump from 'jump.js'

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = navLink.getAttribute('href');
        jump(target,{
            offset :-60
        });

    })
});

const sr = ScrollReveal({
    duration : 1000,
});


sr.reveal('.presentation',{
    origin : 'top',
    distance : '50px',
    scale: 0.5
});

sr.reveal('.text',{
    origin : 'right',
    distance : '50px',
    scale: 0.5,
    delay : 1000
});

sr.reveal('.card',{
    origin : 'left',
    distance : '50px',
    scale: 0.5,
    delay : 1000
});