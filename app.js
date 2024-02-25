Array.from(
    document.querySelectorAll(".navigate-price, .navigate-button")).forEach((item) => {
        item.onclick = () => {
            item.parentElement.parentElement.classList.toggle("change");
        };
    });


// Add Event Litener in menu
const container = document.querySelector(".container");
const color =["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

document.querySelector(".open-navbar-icon").addEventListener('click', ()=>{
    container.classList.add('change');
});

document.querySelector(".close-navbar-icon").addEventListener('click', ()=>{
    container.classList.remove('change');
});

let i =0;

Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
    item.style.cssText = `background-color: ${color[i++]}`;
});