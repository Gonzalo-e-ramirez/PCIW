let idUser= sessionStorage.getItem('id');
usuario();
tarjeta();


function finalizar(){

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su Compra se realizo correctamente',
        showConfirmButton: false,
        timer: 1500
    })
    window.location.href="index.html";
}

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

            let usuarioHtml = '<h3>Nombre: '+ usuario.name + '</h3>'+'<br><h3>Apellido: '+usuario.surname+'</h3><br>'+'<br><h3>Email: '+usuario.email+'</h3><br>'
            listadoHtml+=usuarioHtml;
        }
    }
    if (listadoHtml != ''){
        document.querySelector('#usuarioData').outerHTML = listadoHtml;
    }
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
            let usuarioHtml = '<h3>Numero de tarjeta: '+ tarjeta.numero + '</h3>'+'<br><h3>Vencimiento: '+tarjeta.fechaVen+'</h3><br>'+'<br><h3>Clave: '+tarjeta.numPriv+'</h3><br>'
            listadoHtml+=usuarioHtml;
        }
    }
    if (listadoHtml != ''){
        document.querySelector('#tarjetaData').outerHTML = listadoHtml;
    }

}