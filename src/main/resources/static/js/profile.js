let idUser= sessionStorage.getItem('id');
    usuario();
    tarjeta();

async function usuario() {
    const request = await fetch('api/user', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const users = await request.json();
    let listadoHtml = '';
    for(let usuario of users){

        if(usuario.dni == idUser){

            let telefonoTexto = usuario.userName == null ? '-' : usuario.userName;
            let usuarioHtml = '<tr><td>'+usuario.dni+'</td><br><td>' + usuario.name + ' ' + usuario.surname + '</td><td>'
                + usuario.email+'</td><td>'+telefonoTexto;
            listadoHtml += usuarioHtml;
        }
    }
    document.querySelector('#usuarios tbody').outerHTML = listadoHtml;


}

async function tarjeta(){
    const request = await fetch('api/tarjeta', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const tarjetas = await request.json();

    let listadoHtml = '';
    for(let tarjeta of tarjetas){

        if(tarjeta.id == idUser){
            let usuarioHtml = '<h3>Numero de tarjeta: '+ tarjeta.numero + '</h3>'+'<br><h3>Clave: '+tarjeta.numPriv+'</h3><br>'+'<input class="botons" type="submit" value="Eliminar tarjeta" onclick="eliminarTarjeta()">'
            listadoHtml+=usuarioHtml;
        }
    }
    if (listadoHtml != ''){
        document.querySelector('#tarjeta').outerHTML = listadoHtml;
    }

}

async function eliminarUsuario() {
    const request = await fetch('api/user', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(idUser)
    });

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se elimino su usuario',
        showConfirmButton: false,
        timer: 1500
    })

    sessionStorage.clear();
    window.location.href="index.html";
}

async function eliminarTarjeta(){
    const request = await fetch('api/tarjeta', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(idUser)
    });

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se elimino su tarjeta',
        showConfirmButton: false,
        timer: 1500
    })

    window.location.href="profile.html";
}

    function logout(){
        sessionStorage.clear();
        window.location.href="index.html";
    }

    async function registrarTarjeta(){
    let datos ={}

        datos.id = idUser;
        console.log(idUser);
        datos.numero = document.getElementById("numeroDeTarjeta").value
        datos.fechaVen = document.getElementById("fechaTarjeta").value
        datos.numPriv = document.getElementById("passwordTarjeta").value


        const request = await fetch('api/tarjeta', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const respuesta = await request.json();

        sessionStorage.setItem('tarjeta', datos.numero);

        await llamado();
    }

    async function llamado(){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agrego correctamente su tarjeta',
            showConfirmButton: false,
            timer: 1500
        });
    }