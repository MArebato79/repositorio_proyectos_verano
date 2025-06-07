let nombre="Miguel Angel";
let numero1=10;
let numero2=9;
let edad=numero1+numero2;
let estudios=true;

console.log("Hola mi nombre es "+nombre+" tengo "+edad+" años y estudio "+(estudios?"Si":"No") );

let nota=1;

if(nota < "5"){
    console.log("Suspenso");
}else if("5" <= nota && nota < "7"){
    console.log("Aprobado");
}else if("7" <= nota && nota < "9"){
    console.log("Notable");
}else if(nota>=9){
    console.log("Sobresaliente");
}else{
    console.error("Valor no valido");
}


let entradaCalculo=prompt("Introduce la forma que quieras calcular").toString;

if( entradaCalculo.toLocaleLowerCase == "rectangulo"){
    let base=parseFloat(prompt("Introduce la base del rectangulo"));
    let altura=parseFloat(prompt("Introduce la altura"));
    console.log("El area del rectangulo es "+calcularAreaRectangulo(base,altura));
} else if (entradaCalculo.toLocaleLowerCase == "circulo"){
    let radio=parseFloat(prompt("Introduce el radio:"));
    console.log("El area del circulo es "+calcularAreaCirculo(radio));
}else{
    console.log("Introduce una forma valida");
}

function calcularAreaCirculo(radio){
    return Math.PI*(radio^2);
}
function calcularAreaRectangulo(base,altura){
    return base*altura
}