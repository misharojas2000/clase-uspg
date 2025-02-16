/*UNA COMPAÑÍA DE SEGUROS OFRECE DIFERENTES TIPOS DE PÓLIZAS, CON DIFERENTES COBERTURAS Y PRECIOS. LA PÓLIZA BÁSICA TIENE UNA COBERTURA DEL 50% Y UN PRECIO DE 50 DÓLARES. LA PÓLIZA INTERMEDIA TIENE UNA COBERTURA DEL 75% Y UN PRECIO DE 75 DÓLARES. LA PÓLIZA PREMIUM TIENE UNA COBERTURA DEL 100% Y UN PRECIO DE 100 DÓLARES. ESCRIBE UN PROGRAMA QUE PREGUNTE AL USUARIO QUÉ TIPO DE PÓLIZA DESEA Y CALCULE EL PRECIO TOTAL A PAGAR.*/
const mensaje = String("Las pólizas disponibles son las siguientes: Póliza básica, cubre el 50% y tiene un precio de $50.00, la póliza intermedia, cubre el 75% y tiene un precio de $75.00 y la póliza premium, cubre el 100% y tiene un precio de $100.00, ")
alert(`${mensaje}`)
const pregunta1 = String(prompt("¿Qué póliza desea comprar?").toLowerCase())
let total = 0
if (pregunta1 === "basica") {total = 50 
alert(`El total a cancelar por la póliza seleccionada es de ${total}`)
} else if (pregunta1 === "intermedia"){total = 75   
alert(`El total a cancelar por la póliza seleccionada es de ${total}`)
} else if (pregunta1 === "premium"){total = 100
alert(`El total a cancelar por la póliza seleccionada es de ${total}`)
} else {alert(`Esta póliza no existe`)}