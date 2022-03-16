let container = document.getElementById("container");
let number = parseInt(prompt("inserisci un mumero"));

if (isNaN(number)) {
    alert("ERRORE, ricarica la pagina e inserisci i dati correttamente");
} else {
    if (number % 2 === 0) {
        container.innerHTML = `${number}`
    } else {
        container.innerHTML = `${number + 1}`
    }
}