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
        return `Equipo lenovo asignado a ${asignadoA}`;
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
    copyEquipos = equipos[idEquipo -1];
    if (copyEquipos && copyEquipos.disponible === false){
        copyEquipos.disponible = true;
        return "Equipo devuelto correctamente";
    }else {
        return "Error: el equipo no se encuentra prestado o no existe";
    }
}

//prueba de la funcion devolverEquipo
console.log(devolverEquipo(3));