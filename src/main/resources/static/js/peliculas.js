const dato = sessionStorage.getItem('usuario')

if (dato != null ){
    var menu = document.querySelector('.menu')
    menu.innerHTML = '<ul>' +
        '<li style="display: inline"><a style="color: #fff;font-size: 15px; text-decoration: none; text-transform: uppercase; padding-left: 15px; font-weight: bold;letter-spacing: 1px;" onMouseOver="this.style.cssText=\'color: #85929E\'" onMouseOut="this.style.cssText=\'color: #fff\'" href="profile.html">Mi Perfil</a></li>' +
        '<li style="display: inline"><a style="color: #fff;font-size: 15px; text-decoration: none; text-transform: uppercase; padding-left: 15px; font-weight: bold;letter-spacing: 1px;" onMouseOver="this.style.cssText=\'color: #85929E\'" onMouseOut="this.style.cssText=\'color: #fff\'" onclick="logout()">Cerrar Sesion</a></li>' +
        '</ul>';
    // <a href="#" style="color:#009933;"
    // onMouseOver="this.style.cssText='color: #cc0000'"
    // onMouseOut="this.style.cssText='color: #009933'"> Enlace </a>
}

function logout(){
    sessionStorage.clear();
    window.location.href="index.html";
}

async function otra(){
    let datos= {};
    datos.name = document.getElementById("name").value;
    datos.hour = document.getElementById("horario").value;
    datos.idioma = document.getElementById("idioma").value;
    datos.sala = document.getElementById("sala").value;

    const request = await fetch('api/movie', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
}

function avanzar(){
    window.location.href="selectSeat.html";
}

