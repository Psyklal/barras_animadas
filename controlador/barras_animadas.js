var primer_objeto = document.getElementById("primer_objeto")

/*console.log(primer_objeto)*/

var objeto_superior_primario = document.getElementById("objeto_superior_primario")

/*console.log(objeto_superior_primario.style.getPropertyValue)*/

var recuadros_columna_izquierda_primaria = document.getElementById("recuadros_columna_izquierda_primaria")
var recuadros_columna_izquierda_secundaria = document.getElementById("recuadros_columna_izquierda_secundaria")
var recuadros_columna_izquierda_terciaria = document.getElementById("recuadros_columna_izquierda_terciaria")
var recuadros_columna_izquierda_cuaternaria = document.getElementById("recuadros_columna_izquierda_cuaternaria")

/*console.log(recuadros_columna_izquierda_primaria)
console.log(recuadros_columna_izquierda_secundaria)
console.log(recuadros_columna_izquierda_terciaria)
console.log(recuadros_columna_izquierda_cuaternaria)*/

var contenedor_opcion_principal = document.getElementById("contenedor_opcion_principal")
var contenedor_opcion_secundaria = document.getElementById("contenedor_opcion_secundaria")
var contenedor_opcion_terciaria = document.getElementById("contenedor_opcion_terciaria")
var contenedor_opcion_cuaternaria = document.getElementById("contenedor_opcion_cuaternaria")

var titulo_primer_opcion_menu_primario = document.getElementById("titulo_primer_opcion_menu_primario")


var input_objeto_superior_primario = document.getElementById("input_objeto_superior_primario")
var input_objeto_superior_secundario = document.getElementById("input_objeto_superior_secundario")
var input_objeto_superior_terciario = document.getElementById("input_objeto_superior_terciario")
var input_objeto_superior_cuaternario = document.getElementById("input_objeto_superior_cuaternario")


var menu_contenido_primario = document.getElementById("menu_contenido_primario")
var menu_contenido_secundario = document.getElementById("menu_contenido_secundario")
var menu_contenido_terciario = document.getElementById("menu_contenido_terciario")
var menu_contenido_cuaternario = document.getElementById("menu_contenido_cuaternario")

var nombre_contacto=document.getElementById("nombre_contacto")
console.log(nombre_contacto)
console.log(nombre_contacto.value)

var clase_contacto=document.getElementById("clase_contacto")
console.log(clase_contacto)
console.log(clase_contacto.value)

var tel_celular_contacto = document.getElementById("tel_celular_contacto")
console.log(tel_celular_contacto)
console.log(tel_celular_contacto.value)



var input_img_formulario = document.getElementById("input_img_formulario")
console.log(input_img_formulario)
console.log(input_img_formulario.value)

console.log(imagen_varchar)


console.log("--ƒƒ--")
console.log(nombre_contacto.value)
console.log(clase_contacto.value)
console.log(tel_celular_contacto.value)
console.log(input_img_formulario.value)


function registrarContacto(){
    console.log(nombre_contacto.value)
    console.log(clase_contacto.value)
    console.log(tel_celular_contacto.value)
    console.log(input_img_formulario.value)

    if (nombre_contacto.value!="") {
        if (clase_contacto.value!="") {
            if (tel_celular_contacto.value!="") {
                if (input_img_formulario.value!="") {
                    var formData = new FormData
                    formData.append("nombre_contacto",nombre_contacto.value )
                    formData.append("clase_contacto",clase_contacto.value )
                    formData.append("tel_celular_contacto",tel_celular_contacto.value )
                    formData.append("input_img_formulario",input_img_formulario)


                    let peticionUsuario = new XMLHttpRequest()
                    peticionUsuario.open("POST","controlador/barras_animadas.php")
                    peticionUsuario.send(formData)

                    peticionUsuario.onreadystatechange=function(){
                        if (peticionUsuario.readyState==4&&peticionUsuario.status==200) {
                            let res=peticionUsuario.response
                            console.log(peticionUsuario.response)
                            console.log("--ƒƒ--")
                        }
                    }

                } else {
                    alert("ALGO MALE SAL 4")
                }
            }   else {
                alert("ALGO MALE SAL 3")
            }
        } else {
            alert("ALGO MALE SAL 2")
        }
    } else {
        alert("ALGO MALE SAL 1")
    }
}



function registrarNombreContacto(){
    console.log(nombre_contacto.value)
    console.log(clase_contacto.value)

    if (nombre_contacto.value!="") {
        /*console.log(nombre_contacto.value)*/
        
        var formData = new FormData
        /*console.log(formData)*/

        formData.append("nombre_contacto",nombre_contacto.value)
        formData.append("clase_contacto",clase_contacto.value)
        let peticionUsuario=new XMLHttpRequest()
        peticionUsuario.open("POST","controlador/barras_animadas.php", true)
        peticionUsuario.send(formData)
        peticionUsuario.onreadystatechange=function(){

            if (peticionUsuario.readyState==4&&peticionUsuario.status==200) 
            {
                let res=peticionUsuario.response
                console.log(peticionUsuario.response)
                alert("REGISTRO CORRECTO")
            }
        }   

    }else{
        alert("///;;;,,,,;;;:::▓▓▓▓ ALGO MALIÓ SAL ▓▓▓▓:::;;;,,,,;;;///")
    }
}

function mostrarContenedorOpcionPrincipal(){
    contenedor_opcion_principal.style.display="flex"
    contenedor_opcion_secundaria.style.display="none"
    contenedor_opcion_terciaria.style.display="none"
    contenedor_opcion_cuaternaria.style.display="none"
}

function mostrarContenedorOpcionSecundario(){
    contenedor_opcion_principal.style.display="none"
    contenedor_opcion_secundaria.style.display="flex"
    contenedor_opcion_terciaria.style.display="none"
    contenedor_opcion_cuaternaria.style.display="none"
}
function mostrarContenedorOpcionTerciario(){
    contenedor_opcion_principal.style.display="none"
    contenedor_opcion_secundaria.style.display="none"
    contenedor_opcion_terciaria.style.display="flex"
    contenedor_opcion_cuaternaria.style.display="none"
}
function mostrarContenedorOpcionCuaternario(){
    contenedor_opcion_principal.style.display="none"
    contenedor_opcion_secundaria.style.display="none"
    contenedor_opcion_terciaria.style.display="none"
    contenedor_opcion_cuaternaria.style.display="flex"
}

function modificarPads(){
    /*console.log(input_objeto_superior_primario)
    console.log(input_objeto_superior_primario)
    console.log(parseInt(input_objeto_superior_primario))*/
    
}


function mostrarMenuTituloPrimario(){

    menu_contenido_primario.style.display="flex"    
    menu_contenido_secundario.style.display="none"
    menu_contenido_terciario.style.display="none"
    menu_contenido_cuaternario.style.display="none" 
    
    menu_contenido_primario.style.animation="fadeIn .6s forwards" 
    
    menu_contenido_secundario.style.animation="fadeOut .2s forwards"
    menu_contenido_terciario.style.animation="fadeOut .2s forwards"
    menu_contenido_cuaternario.style.animation="fadeOut .2s forwards" 



}

function mostrarMenuTituloSecundario(){

    menu_contenido_primario.style.display="none"    
    menu_contenido_secundario.style.display="flex"
    menu_contenido_terciario.style.display="none"
    menu_contenido_cuaternario.style.display="none"  
    
    menu_contenido_secundario.style.animation="fadeIn .6s forwards"    

    menu_contenido_primario.style.animation="fadeOut .2s forwards"    
    menu_contenido_terciario.style.animation="fadeOut .2s forwards"
    menu_contenido_cuaternario.style.animation="fadeOut .2s forwards"  
}

function mostrarMenuTituloTerciario(){

    menu_contenido_primario.style.display="none"    
    menu_contenido_secundario.style.display="none"
    menu_contenido_terciario.style.display="flex"
    menu_contenido_cuaternario.style.display="none"    

    menu_contenido_terciario.style.animation="fadeIn .6s forwards"    

    menu_contenido_primario.style.animation="fadeOut .2s forwards"    
    menu_contenido_secundario.style.animation="fadeOut .2s forwards"
    menu_contenido_cuaternario.style.animation="fadeOut .2s forwards"    

}

function mostrarMenuTituloCuaternario(){

    menu_contenido_primario.style.display="none"    
    menu_contenido_secundario.style.display="none"
    menu_contenido_terciario.style.display="none"
    menu_contenido_cuaternario.style.display="flex"    

    menu_contenido_cuaternario.style.animation="fadeIn .6s forwards"    

    menu_contenido_primario.style.animation="fadeOut .2s forwards"    
    menu_contenido_secundario.style.animation="fadeOut .2s forwards"
    menu_contenido_terciario.style.animation="fadeOut .2s forwards"
}

function ocultarMenus() {
    
    menu_contenido_primario.style.display="none"    
    menu_contenido_secundario.style.display="none"
    menu_contenido_terciario.style.display="none"
    menu_contenido_cuaternario.style.display="none"    


    menu_contenido_primario.style.animation="fadeOut 1s forwards"    
    menu_contenido_secundario.style.danimationisplay="fadeOut 1s forwards"
    menu_contenido_terciario.style.animation="fadeOut 1s forwards"
    menu_contenido_cuaternario.style.animation="fadeOut 1s forwards"    

}
