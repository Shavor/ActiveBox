window.addEventListener('load', function () {
    let header = document.querySelector('#header'),
        intro = document.querySelector('#intro'),
        btnUp = document.querySelector('#btnUp');
    const headerHieght = 100;
    const navHieght = 40;
    let initialyYvalue = window.scrollY

    // Button to up=============

    btnUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });

    //фиксируем прокрутку================

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        console.log(scrollY);
        if(scrollY > headerHieght) {
            makeItFixed();
            if(scrollY > headerHieght + navHieght && scrollY > initialyYvalue) {
                makeItNotFixed();
            }  else {
                makeItFixed();
            }

        } else {
            makeItNotFixed();
        }

        initialyYvalue = scrollY;
    })
    
    function makeItFixed() {
        header.classList.add('fixed');
    }

    function makeItNotFixed() {
        header.classList.remove('fixed');
    }
});