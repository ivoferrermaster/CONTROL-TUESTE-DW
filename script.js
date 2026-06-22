// Esperamos a que el HTML cargue por completo
document.addEventListener("DOMContentLoaded", function() {

    // seleccionamos todos los botones "Ver más"
    const botonesAbrir = document.querySelectorAll(".btn-abrir-modal");
    
    // seleccionamos todos los botones "X" para cerrar
    const botonesCerrar = document.querySelectorAll(".btn-cerrar-modal");

    // función de ABRIR a cada botón 
    botonesAbrir.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // atributo data-target (ej: "modal1")
            const idModal = boton.getAttribute("data-target");
            document.getElementById(idModal).style.display = "flex";
        });
    });

    // funcion de cerrar boton
    botonesCerrar.forEach(function(boton) {
        boton.addEventListener("click", function() {
            boton.closest(".modal-fondo").style.display = "none";
        });
    });
});

// FUNCIÓN PARA INYECTAR COMPONENTES (HEADER/FOOTER)
function inyectarComponente(idContenedor, rutaArchivo) {
    const contenedor = document.getElementById(idContenedor);
        if (contenedor) {
        fetch(rutaArchivo)
            .then(respuesta => {
                if (!respuesta.ok) throw new Error("No se pudo cargar: " + rutaArchivo);
                return respuesta.text();
            })
            .then(codigoHtml => {
                contenedor.innerHTML = codigoHtml;
            })
            .catch(error => console.error("Error inyectando componente:", error));
    }
}

//FUNCIONES DE LAS PREGUNTAS
function mostrar() {
    let rep = document.getElementById("rep1");

    if (rep.style.display === "none" || rep.style.display === "") {
        rep.style.display = "block";
    } else {
        rep.style.display = "none";
    }
}

function mostrar2() {
    let rep = document.getElementById("rep2");

    if (rep.style.display === "none" || rep.style.display === "") {
        rep.style.display = "block";
    } else {
        rep.style.display = "none";
    }
}

function mostrar3() {
    let rep = document.getElementById("rep3");

    if (rep.style.display === "none" || rep.style.display === "") {
        rep.style.display = "block";
    } else {
        rep.style.display = "none";
    }
}

function mostrar4() {
    let rep = document.getElementById("rep4");

    if (rep.style.display === "none" || rep.style.display === "") {
        rep.style.display = "block";
    } else {
        rep.style.display = "none";
    }
}