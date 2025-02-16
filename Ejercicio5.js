/*UN CINE OFRECE DIFERENTES PRECIOS DE ENTRADA SEGÚN LA EDAD DE LOS ESPECTADORES. LOS MENORES DE 12 AÑOS PAGAN 5 DÓLARES, LOS MAYORES DE 65 AÑOS PAGAN 7 DÓLARES, Y LOS DEMÁS PAGAN 10 DÓLARES. ESCRIBE UN PROGRAMA QUE PREGUNTE LA EDAD DEL ESPECTADOR Y CALCULE EL PRECIO DE ENTRADA.*/
const edad = parseInt(prompt("¿Cuál es su edad?"))
const precio1 = 5.00
const precio2 = 7.00
const precio3 = 10.00
let total = 0 

if(edad < 12) { total = precio1}
else if( edad > 65) { total = precio2}
else { total = precio3 }

alert(`El valor de su entrada es de ${total}, disfrute la película`)