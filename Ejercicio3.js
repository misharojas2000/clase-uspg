/*UN RESTAURANTE OFRECE DESCUENTOS A LOS CLIENTES SEGÚN LA EDAD. LOS MENORES DE 12 AÑOS TIENEN UN DESCUENTO DEL 50% EN SU CONSUMO. LOS MAYORES DE 65 AÑOS TIENEN UN DESCUENTO DEL 25% EN SU CONSUMO. LOS CLIENTES ENTRE 12 Y 65 AÑOS NO TIENEN DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.*/

const edad = parseInt(prompt("Ingrese su edad"))
const totalFactura = parseFloat(prompt("¿Cuál es el total de su factura?"))
let total = 0 

if(edad < 12) { total = totalFactura - (totalFactura * 0.50) }
else if( edad > 65) { total = totalFactura - (totalFactura * 0.25)}
else { total = totalFactura }

alert(`El total a pagar por su factura es de: ${total.toFixed(2)}`)