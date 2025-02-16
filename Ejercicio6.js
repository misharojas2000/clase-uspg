/*UNA TIENDA DE ROPA TIENE DIFERENTES PROMOCIONES SEGÚN LA CANTIDAD DE PRENDAS COMPRADAS. SI SE COMPRAN MÁS DE 3 PRENDAS, SE APLICA UN DESCUENTO DEL 10% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MÁS DE 5 PRENDAS, SE APLICA UN DESCUENTO DEL 20% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MENOS DE 3 PRENDAS, NO HAY DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.*/

const precioPrenda = parseFloat(prompt("¿Cúal es el precio de la prenda?"))
const prendas = parseInt(prompt("¿Cuántas prendas quiere cancelar?"))

let totalPagar = 0

if (prendas > 3 && prendas <= 5) {totalPagar = prendas * precioPrenda * (1 - 0.10)}
else if (prendas > 5) {totalPagar = prendas * precioPrenda * (1 - 0.20)}
else {totalPagar = prendas * precioPrenda}

alert(`El precio a pagar por sus prendas es de: ${totalPagar.toFixed(2)}`)