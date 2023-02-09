/*1 - Escribir un programa que pida al usuario una palabra 
y la muestre por pantalla 10 veces*/
const readlineSyncWord = require("readline-sync")

let word = readlineSyncWord.question("Ingrese una palabra: ")

for(i = 0; i <= 10; i++){
    console.log(word);
}

/*2 - Escribir un programa que pregunte al usuario su edad 
y muestre por pantalla todos los años que ha cumplido 
(desde 1 hasta su edad).*/

const readlineSyncAge = require("readline-sync")

let age = readlineSyncAge.question("Ingrese su edad: ")

console.log("El usuario ha cumplido en años: ");
for(i = 0; i <= age; i++){
    
    console.log(i);
}

/*Escribir un programa que pida al usuario un número entero positivo 
y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas*/

const readlineSyncPosInt = require("readline-sync")

let posInt = readlineSyncPosInt.question("Ingrese un número entero positivo: ")

if(posInt <= 0 || Number.isInteger(posInt) !== false){
    throw new Error("El número ingresado no cumple con los parámetros solicitados")
        } else { 
                for(i = 0; i <= posInt; i++){
                    if(posInt == 1 || i % 2 !== 0){
                        console.log("Los números impares hasta",posInt,"son:",i);
            }
        } 
} 

/*Escribir un programa que pida al usuario un número entero 
y muestre por pantalla un triángulo rectángulo 
como el de más abajo, de altura el número introducido.*/

const readlineSyncPosInt2 = require("readline-sync")

let posInt2 = readlineSyncPosInt2.question("Ingrese un número entero: ")

if(Number.isInteger(posInt2) == true){
    throw new Error("El número ingresado no cumple con los parámetros solicitados")
        } else { 
                for(i = 0; i <= posInt2; i++){
                    if(posInt2 >= 0){
                        console.log("*".repeat(i));
            }
        } 
} 

/*Escribir un programa que pida al usuario una palabra 
y luego muestre por pantalla una a una 
las letras de la palabra introducida empezando por la última.*/

const readlineSyncWord2 = require("readline-sync")

let word2 = readlineSyncWord2.question("Ingrese una palabra: ")

let array = Array.from(word2)
console.log(array.reverse())





