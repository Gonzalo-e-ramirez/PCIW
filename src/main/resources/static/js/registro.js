async function registrarUsuario(){
    let datos = {};
    datos.dni = document.getElementById("dni").value
    datos.name = document.getElementById("nombre").value
    datos.surname = document.getElementById("apellido").value
    datos.email = document.getElementById("correo").value
    datos.userName = document.getElementById("user").value
    datos.password = document.getElementById("password").value

    const request = await fetch('api/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    const respuesta = await request.json();
    console.log(respuesta);

    if(respuesta != 0){

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se creo su usuario',
            showConfirmButton: false,
            timer: 1500
        })

        window.location.href="index.html";
    }else{
        alert("No se pudo crear el usuario");
    }

}




