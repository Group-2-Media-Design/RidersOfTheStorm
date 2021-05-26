const animations = () => {

    // DEFINIG ALL THE CLASSES
    const menuBtn = document.querySelector('.menu-btn');
    const burgerTwo = document.querySelector('.menu-btn_burger_2');
    const burgerThree = document.querySelector('.menu-btn_burger_3');
    const burgerOne = document.querySelector('.menu-btn_burger');
    const navLinks = document.querySelectorAll('.nav-links li');
    const list = document.querySelector('.nav-links');
    
    // EVENT ON CLICK
    menuBtn.addEventListener('click', () => {
        // TOGGLES THE ACTIVE CLASS FOR BURGER MENU
        burgerTwo.classList.toggle('menu-btn_burger_2-active');
        burgerThree.classList.toggle('menu-btn_burger_3-active');
        burgerOne.classList.toggle('menu-btn_burger-active');
        list.classList.toggle('nav-active');
        
        // FOR EVERY SINGLE <li> ELEMENT
        navLinks.forEach((link, index) => {
            // IF THERE IS NO ANIMATION 
            // ANIMATE ALL THE LINKS
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade .5s ease forwards ${index / 7 + 0.3}s`
            }
        });
    });
}

animations();