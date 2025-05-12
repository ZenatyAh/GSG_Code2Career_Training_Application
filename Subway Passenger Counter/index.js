let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count_el");

const increment = () => {
    count += 1;
    countEl.textContent = count;
}

const save = () => {
    let countSrt = count + ' - ';
    saveEl.textContent += countSrt;
    countEl.textContent = 0;
    count = 0;
}
console.log("Let's Count The Passengers ! ")