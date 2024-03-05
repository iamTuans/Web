let menu1List = document.querySelectorAll('#menu1 .menu-item');
let menu1Content = document.querySelectorAll('#container1 .trangthai');

for(let i = 0; i < menu1List.length; i++) {
    menu1List[i].addEventListener('click', () => {
        // Remove active class from all menu items
        for(let j = 0; j < menu1List.length; j++) {
            menu1List[j].classList.remove('active');
            menu1Content[j].classList.remove('active');
        }

        menu1List[i].classList.add('active');
        menu1Content[i].classList.add('active');
    })
}

let menu2List = document.querySelectorAll('#menu2 .menu-item');
let menu2Content = document.querySelectorAll('#container2 .pick');
for(let i = 0; i < menu2List.length; i++) {
    menu2List[i].addEventListener('click', () => {
        // Remove active class from all menu items
        for(let j = 0; j < menu2List.length; j++) {
            menu2List[j].classList.remove('active');
            menu2Content[j].classList.remove('active');
        }

        menu2List[i].classList.add('active');
        menu2Content[i].classList.add('active');
    })
}