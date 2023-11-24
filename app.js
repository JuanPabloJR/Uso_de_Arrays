let beers = ["corona", "victoria", "des"];
let wines = ["chardonnay", "merlot", "Cabernet"];
// console.log(beers);
// console.log(beers.length);

//Mutable
beers.push("Heineken"); //Cambia o modifica el array (agrega un elemento al final)
beers.unshift("Modelo especial"); //Agrega un elemento al inicio
beers.splice(2, 0, "Fullers"); //Insertar un elemento o borrar elementos

// let b = beers.pop(); //Elimina y retorna el último elemento
// let b2 =  beers.shift(); //Elimina el primer elemento
// console.log(b);
// console.log(b2);

//Inmutable
const AlcoholicDrinks = beers.concat(wines);
AlcoholicDrinks.push("Rioja");
show(beers); //Mediante la función arr podemos ver los elementos de nuestro array
Dom ("a1", beers);
Dom("a2", AlcoholicDrinks);

function show (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function Dom(element, arr) {
    document.getElementById(element).innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        document.getElementById(element).innerHTML += "<div><div>" + arr[i]; 
    }
}
// for (let index = numbers.length -1; index >= 0; index--) { */}
//     console.log(numbers[index]);
// }

//console.log(beers.length); //Nos dice lo largo de nuestro array
// console.log(numbers [numbers.length-1] ); //Nos va a dar siempre la última posición del array
// console.log(numbers.at(-2)); //Podemos usar números negativos con el at (va al revés)