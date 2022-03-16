let container = document.getElementById("container");
let randomName;
let randomSurname;

let nomi = ["Ugo", "Gio", "Gianni", "Jonny", "Mimmo", "Mauro", "Aldo", "Giovanni", "Giacomo", "Gioele"];
let cognomi = ["Bianchi", "Brambilla", "Fumagalli", "Rossini", "Craxi", "Baglio", "Storti", "Poretti"];

for (i = 0; i < nomi.length; i++) {
    randomName = Math.floor(Math.random() * nomi.length);
    randomSurname = Math.floor(Math.random() * cognomi.length);
    container.innerHTML += `<div>${nomi[randomName]} ${cognomi[randomSurname]}</div>`;
}