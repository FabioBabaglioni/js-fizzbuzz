// creare ciclo per numeri da 1 a 100

for(let i = 1; i <= 100; i++)

// se sono divisibili per due e per 5  allora fizzbuzz
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 3 ===0){
        // se sono divisibili per 3 allora fizz
        console.log("Fizz")
    } else if(i % 5 === 0 ){
        // se sono divisibili per  allora buzz
        console.log("Buzz")
    }else{
        // se no stampa il numero normale
        console.log(i)
    }

    
