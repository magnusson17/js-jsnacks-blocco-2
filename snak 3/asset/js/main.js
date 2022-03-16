let container = document.getElementById("container");
let sum = 0;
let numbers = [1, 2, 3, 4, 8];

//metodo alternativo, in questo caso ricorda di lasciare vuoto l'array
/*for (i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNum);
    sum += numbers[i];
}
container.innerHTML = `${sum}`*/

for (i = 0; i < numbers.length; i = i + 2) {
    sum += numbers[i];
}
container.innerHTML = `${sum}`;