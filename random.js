listadecu = []

let i = 0;
while(i < 6){
    let numeroEntreUmECem = Math.floor(Math.random() * 60) + 1;
    listadecu.push(numeroEntreUmECem);
    i++;
}

console.log(listadecu.join(' | '))