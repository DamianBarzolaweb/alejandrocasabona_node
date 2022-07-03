const formulario = document.getElementById('form-contact')
formulario.addEventListener('submit', function(e){
    e.preventDefault
    if(e.target.name.value == ''){
        alert ('El campo nombre se tiene que completar')
        return
    }
    if(e.target.email.value == ''){
        alert ('El campo de email se tiene que completar')
        return
    }
    if(e.target.telefono.value == ''){
        alert ('El campo del teléfono se tiene que completar')
        return
    }
    if(e.target.mensaje.value == ''){
        alert ('Por favor complete el campo del mensaje')
        return
    }
    if(e.target.checkbox.value == '#'){
        alert ('Debe estar de acuerdo con los Términos y Condiciones')
        
    }
})
