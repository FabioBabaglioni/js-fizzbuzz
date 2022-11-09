
const contenitore = document.querySelector(".container")
// creare ciclo per numeri da 1 a 100

for(let i = 1; i <= 100; i++)

// se sono divisibili per due e per 5  allora fizzbuzz
    if(i % 3 === 0 && i % 5 === 0){
        const element = `<div class = "fizz_buzz square">${"FizzBuzz"}<!div>`;
        contenitore.innerHTML +=element

    }else if(i % 3 === 0){
        // se sono divisibili per 3 allora fizz
        const element = `<div class = "fizz square">${"Fizz"}<!div>`;
        contenitore.innerHTML +=element
    } else if(i % 5 === 0 ){
        // se sono divisibili per  allora buzz
        const element = `<div class = "buzz square">${"Buzz"}<!div>`;
        contenitore.innerHTML +=element
    }else{
        // se no stampa il numero normale
        const element = `<div class = "normal square">${i}<!div>`;
        contenitore.innerHTML +=element
    }

    
