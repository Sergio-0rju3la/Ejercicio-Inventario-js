const equipos = [
    {id: 1, marca: "Lenovo", ramGB: 8, disponible: true, asignadoA: ""},
    {id: 2, marca: "HP", ramGB: 16, disponible: false, asignadoA: "Maria Aleja"},
    {id: 3, marca: "Dell", ramGB: 32, disponible: true, asignadoA: ""},
    {id: 4, marca: "Lenovo", ramGB: 16, disponible: true, asignadoA: ""}
]

//prestar equipo
function prestarEquipo (idEquipo, nombreAprendiz) {
    const asignadoA = nombreAprendiz
    const copyEquipos = equipos[idEquipo -1];
    if (copyEquipos && copyEquipos.disponible === true){
        copyEquipos.disponible = false;
        return `Equipo asignado a ${asignadoA}`;
    }else if (copyEquipos && copyEquipos.disponible === false){
        return "El equipo no esta disponible";
    }else{
        return "Equipo no encontrado";
    }
}
//prueba de la funcion prestarEquipo
console.log(prestarEquipo(5, "Jose Perez"));

//devolver equipo
function devolverEquipo (idEquipo) {
    const copyEquipos = equipos[idEquipo -1];
    if (copyEquipos && copyEquipos.disponible === false){
        copyEquipos.disponible = true;
        copyEquipos.asignadoA = "";
        return "Equipo devuelto correctamente";
    }else {
        return "Error: el equipo no se encuentra prestado o no existe";
    }
}

//prueba de la funcion devolverEquipo
console.log(devolverEquipo(3));

//generar reporte de equipos

function obtenerReporte (arr) {
    const totalEquipos = arr.length;
    let equiposDisponibles = 0;
    let equiposPrestados = 0;
    let equiposPotentes = 0;
    arr[0].disponible ? ++equiposDisponibles : ++equiposPrestados;
    arr[1].disponible ? ++equiposDisponibles : ++equiposPrestados;
    arr[2].disponible ? ++equiposDisponibles : ++equiposPrestados;
    arr[3].disponible ? ++equiposDisponibles : ++equiposPrestados;
    if (arr[0].disponible && arr[0].ramGB >= 16) ++equiposPotentes;
    if (arr[1].disponible && arr[1].ramGB >= 16) ++equiposPotentes;
    if (arr[2].disponible && arr[2].ramGB >= 16) ++equiposPotentes;
    if (arr[3].disponible && arr[3].ramGB >= 16) ++equiposPotentes;
    return {
        totalEquipos : totalEquipos,
        disponibles : equiposDisponibles,
        prestados : equiposPrestados,
        equiposPotentesDisponibles : equiposPotentes
    }
}

console.log(obtenerReporte(equipos));
