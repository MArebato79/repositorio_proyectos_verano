const lista =document.getElementById("lista-productos");
const boton=document.getElementById("boton_baratos");
const botonOrdenar=document.getElementById("ordenarPrecios");
const productos=[{ nombre: "Vinilo", precio: 25.5 },
  { nombre: "Tocadiscos", precio: 109.95 },
  { nombre: "Móvil", precio: 300 },
  { nombre: "Silla Gaming", precio: 700 },
  { nombre: "Patatas", precio: 12 }];

  productos.forEach(producto=>{
    const li=document.createElement("li");
    li.textContent=`${producto.nombre} - ${producto.precio}`;
    lista.appendChild(li);
})

boton.addEventListener("click",()=>{
    const baratos=productos.filter(producto=> producto.precio<30);
    lista.innerHTML="";
    baratos.forEach(barato=>{
        const li=document.createElement("li");
        li.textContent=`${barato.nombre} - ${barato.precio}`;
        lista.appendChild(li);
    })
});

botonOrdenar.addEventListener("click",()=>{
    const ordenados=[...productos].sort((a,b)=> a.precio - b.precio);

    lista.innerHTML="";

    ordenados.forEach(ordenado=>{
        const li=document.createElement("li");
        li.textContent=`${ordenado.nombre} - ${ordenado.precio}`;
        lista.appendChild(li);
    })
})