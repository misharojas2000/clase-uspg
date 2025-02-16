/*UNA EMPRESA OFRECE UN BONO DE PRODUCTIVIDAD A SUS TRABAJADORES, DEPENDIENDO DEL NÚMERO DE UNIDADES PRODUCIDAS EN UN MES. SI SE PRODUCEN MÁS DE 100 UNIDADES, SE OTORGA UN BONO DEL 5% DEL SALARIO. SI SE PRODUCEN MÁS DE 200 UNIDADES, SE OTORGA UN BONO DEL 10% DEL SALARIO. SI SE PRODUCEN MENOS DE 100 UNIDADES, NO HAY BONO. ESCRIBE UN PROGRAMA QUE CALCULE EL BONO A OTORGAR Y MUESTRE EL SALARIO TOTAL A RECIBIR.*/
const salario = parseFloat(prompt("Ingrese su salario:"))
const unidadesProducidas = parseInt(prompt("¿Cuántas unidades produjo este mes?"))
let salarioTotal = 0
if (unidadesProducidas >= 100 && unidadesProducidas < 200) {
    salarioTotal = salario * (1 + 0.05)
} else if (unidadesProducidas >= 200) {salarioTotal = salario * (1 + 0.10)     
} else {salarioTotal = salario}
alert(`Su salario a total es de ${salarioTotal.toFixed(2)}`)
