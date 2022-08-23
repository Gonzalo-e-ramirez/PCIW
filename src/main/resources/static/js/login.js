async function login(){
    let datos= {};
    datos.userName = document.getElementById("usuario").value;
    datos.password = document.getElementById("password").value;

    const request = await fetch('api/login', {
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
        sessionStorage.setItem('usuario', datos.userName);
        sessionStorage.setItem('id', respuesta)

        window.location.href="index.html";
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Clave o usuario incorrecto!',
            })
    }


   // function cerrarSesion()
   // {
   //     sessionStorage.clear(); //esto borra todo del storage pero se puede elegir que borrar y que no.
   // }

}

function userLogin(){
    var log =sessionStorage.getItem('usuario');
    if (log!=null){

    }
}