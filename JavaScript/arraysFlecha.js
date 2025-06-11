let numeros=[4, 7, 2, 9, 5, 1];

for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]);
}

/*¿Qué hace este código?*/

let edades = [17, 22, 15, 30];

edades.forEach(edad => {
  if (edad >= 18) {
    console.log(edad + " es mayor de edad");
  }
});
/*Este codigo comprueba que con cada edad que se recorre atraves del for each se comprueba si es mayor de edad*/

/*Convierte esta función flecha a función normal:*/

const esPar = num => num % 2 === 0;

function esPar(num){
    return((num%2)===0);
}
/*Convierte esta función normal a flecha:*/

function multiplicar(x, y) {
  return x * y;
}

const multiplicado=(x,y)=>x*y;

let nombres=["ana","manuel","jose"];

let mayusculas=nombres.map(nombre=> nombre.toUpperCase);

let numeros2=[3, 8, 5, 10, 13, 6];

let pares=numeros2.filter(numero=>numero%2===0);

let lenguajes=["HTML", "CSS", "JS"];

let aprendiendo=lenguajes.map(lenguaje=>"estoy aprendiendo "+lenguaje);

const productos=[{nombre:"vinilo",precio:25.5},
                  {nombre:"TocaDiscos",precio:109.95},
                  {nombre:"Movil",precio:300},
                  {nombre:"silla Gaming",precio:700},
                  {nombre:"patatas",precio:12}];

let prodBaratos=productos.filter(producto => producto.precio<30)
.map(producto=>`El producto ${productos.nombre} cuesta ${productos.precio}`);

let mensajesProd=productos.map(producto=>`El producto ${producto.nombre} cuesta ${producto.precio}`);

let total=productos.reduce((acum,producto)=>acum+producto.precio,0);