const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

menu.classList.add('h-0');

btn.addEventListener("click", () => {
    
    menu.classList.toggle('hidden');
    menu.classList.add('transition-all', 'duration-300');
});


const submenu = document.querySelectorAll(".mobile-submenu");

submenu.forEach(menu => {
    menu.addEventListener("click", () => {
        const menuNav = menu.nextElementSibling;
        menuNav.classList.toggle("hidden");
    });
});