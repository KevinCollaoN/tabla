let radiologia = [{
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    }
];

let traumatologia = [{
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "CECILIA MENDEZ",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10.30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    }
];


let dental = [{
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11.30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    }
];
    
//LISTA SELECTOR
const listaSelect = document.getElementById("listaSelect");
listaSelect.addEventListener("change", function(){
    
    switch(listaSelect.value){
        case "":
            
            console.log("nada");
        break;

        case "sRadio":
            
            tabla(radiologia);
        break;

        case "sTrauma":
        
            tabla(traumatologia);
        break;

        case "sDental":
            tabla(dental);
        break;
    };
});
//FUNCIONES
//Remueve la fila "n", n es dado por el DOM
function clean(n){
    $(document).ready(function(){
        $(`#${n}`).remove(); 
    })
}
//Crea la tabla según la especialidad dada por el "select"
function tabla(especialidad){
    //Crea la cabecera de la tabla
    var texto = `<tr><th><span id='orden' onclick='ordenFunc()'><i class="fas fa-sort-down"></i></span>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>`;
    //Itera las posiciones del arreglo dado, y las propiedades de los objetos dentro
    for (let i = 0; i < especialidad.length; i++) {
        texto += `<tr id="${i}" class="filasTabla">
        <td>${especialidad[i].hora}</td>
        <td>${especialidad[i].paciente}</td>
        <td>${especialidad[i].rut}</td>
        <td>${especialidad[i].prevision}</td>
        <td>${especialidad[i].especialista}</td>
        <td><div class="eliminar" onclick="clean('${i}')"><i class="fas fa-times-circle"></i></td>
        </tr>`;
        //agrega "x" con evento onclick en ultima fila de la tabla, con su correspondiente "i", para eliminar la fila completa "<tr>" con su "id = i"
    }
    document.getElementById("tabla").innerHTML = texto;

    //Almacenar primer y ultimo paciente, con sus previsiones 
    let pacienteUno = especialidad[0].paciente;
    let previsionUno = especialidad[0].prevision;
    let pacienteFinal = especialidad[especialidad.length - 1].paciente;
    let previsionFinal = especialidad[especialidad.length - 1].prevision;
    document.getElementById("pacientes").innerHTML = `<h4>Primera Atención: ${pacienteUno} - ${previsionUno} | Última Atención: ${pacienteFinal} - ${previsionFinal}</h4>`
}
//Invierte elementos ".filasTabla" creados en la función "tabla"
function ordenFunc(){
    $("tbody").each(function(){
        var arr = $.makeArray($(".filasTabla",this).detach());
        arr.reverse();
          $(this).append(arr);
      });
    
}