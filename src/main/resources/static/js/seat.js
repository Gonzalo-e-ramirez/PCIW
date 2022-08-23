let idUser= sessionStorage.getItem('id');
if (idUser != null){
    precio =750 - (750*0.10);
    let listadoHtml = '<div id="precio"><a> Precio: $'+precio+'</a></div>';

    document.querySelector('#precio').outerHTML = listadoHtml;
}

if (idUser != null ){
    var menu = document.querySelector('.menu')
    menu.innerHTML = '<ul>' +
        '<li style="display: inline"><a style="color: #fff;font-size: 15px; text-decoration: none; text-transform: uppercase; padding-left: 15px; font-weight: bold;letter-spacing: 1px;" onMouseOver="this.style.cssText=\'color: #85929E\'" onMouseOut="this.style.cssText=\'color: #fff\'" href="profile.html">Mi Perfil</a></li>' +
        '<li style="display: inline"><a style="color: #fff;font-size: 15px; text-decoration: none; text-transform: uppercase; padding-left: 15px; font-weight: bold;letter-spacing: 1px;" onMouseOver="this.style.cssText=\'color: #85929E\'" onMouseOut="this.style.cssText=\'color: #fff\'" onclick="logout()">Cerrar Sesion</a></li>' +
        '</ul>';
    // <a href="#" style="color:#009933;"
    // onMouseOver="this.style.cssText='color: #cc0000'"
    // onMouseOut="this.style.cssText='color: #009933'"> Enlace </a>
}

function avanzar(){
    window.location.href="purchase.html";
}

function cambiar(){
    let precio = 750;
    if (idUser != null){
        precio =750 - (750*0.10);
    }
    let y = document.getElementById('number').value;
   console.log(y)
    let listadoHtml = '<div id="precio"><a> Precio: $'+precio*y+'</a></div>';

    document.querySelector('#precio').outerHTML = listadoHtml;
}

function logout(){
    sessionStorage.clear();
    window.location.href="index.html";
}