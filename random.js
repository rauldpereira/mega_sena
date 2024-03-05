let lista = [];

for (let i = 0; i < 6;  i++) {
    let umESessenta = Math.floor(Math.random() * 60) + 1;
    let found = false;

    while (!found) {
        if (!lista.includes(umESessenta)) {
            lista.push(umESessenta);
            found = true;
        } else {
            umESessenta = Math.floor(Math.random() * 60) + 1;
        }
    }

}

console.log(lista.join(' | '));