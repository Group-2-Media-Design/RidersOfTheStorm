const navAnimation = () => {

    // DEFINIG ALL ELEMENTS
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

navAnimation();

const buildingsAnimation = () => {
    // DEFINING ALL ELEMENTS
    const buildingList_1 = document.querySelector('.building-list-1');
    const buildingList_2 = document.querySelector('.building-list-2');
    const buildingList_3 = document.querySelector('.building-list-3');
    const buildingList_4 = document.querySelector('.building-list-4');
    const campusOverview = document.getElementById('campus-overview-image');

    // EVENT LISTENERS
    buildingList_2.addEventListener('click', () => {
        buildingList_1.classList.add('building-list-1-ractive');
        buildingList_1.classList.remove('building-list-1-rractive');
        buildingList_4.classList.remove('building-list-4-responsive');
        buildingList_2.classList.add('building-list-2-active');
        buildingList_2.classList.add('building-list-2-responsive');
        buildingList_3.classList.remove('building-list-3-responsive');
        buildingList_1.classList.add('building-list-1-nactive');
        buildingList_3.classList.remove('building-list-3-active');
        buildingList_4.classList.remove('building-list-4-active');
        campusOverview.src = './img/R3.png'
    });

    buildingList_3.addEventListener('click', () => {
        buildingList_1.classList.add('building-list-1-ractive');
        buildingList_1.classList.remove('building-list-1-rractive');
        buildingList_4.classList.remove('building-list-4-responsive');
        buildingList_2.classList.remove('building-list-2-responsive');
        buildingList_3.classList.add('building-list-3-active');
        buildingList_3.classList.add('building-list-3-responsive');
        buildingList_1.classList.add('building-list-1-nactive');
        buildingList_2.classList.remove('building-list-2-active');
        buildingList_4.classList.remove('building-list-4-active');
        campusOverview.src = './img/R1.png';
    });

    buildingList_4.addEventListener('click', () => {
        buildingList_1.classList.add('building-list-1ractive')
        buildingList_1.classList.remove('building-list-1-rractive');
        buildingList_2.classList.remove('building-list-2-responsive');
        buildingList_3.classList.remove('building-list-3-responsive');
        buildingList_4.classList.add('building-list-4-active');
        buildingList_4.classList.add('building-list-4-responsive');
        buildingList_1.classList.add('building-list-1-nactive');
        buildingList_3.classList.remove('building-list-3-active');
        buildingList_2.classList.remove('building-list-2-active');
        campusOverview.src = './img/R4.png';
    });

    buildingList_1.addEventListener('click', () => {
        buildingList_1.classList.add('building-list-1-rractive');
        buildingList_3.classList.remove('building-list-3-responsive');
        buildingList_4.classList.remove('building-list-4-responsive');
        buildingList_2.classList.remove('building-list-2-responsive');
        buildingList_1.classList.remove('building-list-1-nactive');
        buildingList_4.classList.remove('building-list-4-active');
        buildingList_3.classList.remove('building-list-3-active');
        buildingList_2.classList.remove('building-list-2-active');
        campusOverview.src = './img/R10.png';

    });
}

buildingsAnimation();




let floor1 = document.getElementById('floor1');
let floor2 = document.getElementById('floor2');
let floor3 = document.getElementById('floor3');
let floor4 = document.getElementById('floor4');

let img = document.getElementById('img');

    const buildingList_1 = document.querySelector('.building-list-1');
    const buildingList_2 = document.querySelector('.building-list-2');
    const buildingList_3 = document.querySelector('.building-list-3');
    const buildingList_4 = document.querySelector('.building-list-4');
    const campusOverview = document.getElementById('campus-overview-image');

floor1.addEventListener('click', () => {
    buildingList_1.classList.remove('building-list-1-nactive');
    buildingList_4.classList.remove('building-list-4-active');
    buildingList_3.classList.remove('building-list-3-active');
    buildingList_2.classList.remove('building-list-2-active');

    img.src = '../img/groundfloor.png';
});
floor2.addEventListener('click', () => {
    buildingList_2.classList.add('building-list-2-active');
    buildingList_1.classList.add('building-list-1-nactive');
    buildingList_3.classList.remove('building-list-3-active');
    buildingList_4.classList.remove('building-list-4-active');
    img.src = '../img/firstfloor.png';
});
floor3.addEventListener('click', () => {
    buildingList_3.classList.add('building-list-3-active');
    buildingList_1.classList.add('building-list-1-nactive');
    buildingList_2.classList.remove('building-list-2-active');
    buildingList_4.classList.remove('building-list-4-active');
    img.src = '../img/secondfloor.png';
});
floor4.addEventListener('click', () => {
    buildingList_4.classList.add('building-list-4-active');
    buildingList_1.classList.add('building-list-1-nactive');
    buildingList_3.classList.remove('building-list-3-active');
    buildingList_2.classList.remove('building-list-2-active');
    img.src = '../img/forthfloor.png';
});