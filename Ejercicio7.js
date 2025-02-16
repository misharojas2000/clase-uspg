Ejercicio 7
Fernanda Mishell Monzón Rojas, carnet: 2500364
José Eduardo Zapet Rodríguez, carnet: 2200071

/*UN PROFESOR CALIFICA A SUS ESTUDIANTES SEGÚN LA SIGUIENTE ESCALA: 0-59 PUNTOS ES UNA CALIFICACIÓN DE F, 60-69 PUNTOS ES UNA CALIFICACIÓN DE D, 70-79 PUNTOS ES UNA CALIFICACIÓN DE C, 80-89 PUNTOS ES UNA CALIFICACIÓN DE B, Y 90-100 PUNTOS ES UNA CALIFICACIÓN DE A. ESCRIBE UN PROGRAMA QUE PREGUNTE LA NOTA DEL ESTUDIANTE Y MUESTRE SU CALIFICACIÓN*/
const pregunta = parseInt(prompt("¿Cuál es la calificación del estudiante?"))
const calA = "Su calificación es de A"
const calF = "Su calificación es de F"
const calD = "Su calificación es de D"
const calC = "Su calificación es de C"
const calB = "Su calificación es de B"
const error = "Calificación no válida"
if (pregunta <= 59){alert(`${calF}`)}
else if (pregunta >= 60 && pregunta <= 69){alert(`${calD}`)}
else if (pregunta >= 70 && pregunta <= 79){alert(`${calC}`)}
else if (pregunta >= 80 && pregunta <= 89){alert(`${calB}`)}
else if (pregunta >= 90 && pregunta <= 100){alert(`${calA}`)}
else {alert(`${error}`)}