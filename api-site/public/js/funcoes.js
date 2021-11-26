// sessão
function validarSessao() {


    var email= sessionStorage.EMAIL_USUARIO;
    var nome= sessionStorage.NOME_USUARIO;
    var nickName = sessionStorage.nickName_USUARIO;
    
    var h1LoginUsuario = document.getElementById("h1_login_usuario");
    
    if (email != null && nome != null) {
        window.alert(`Seja bem-vindo, ${nickName}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
    
        b_usuario.innerHTML = nome;
        profile.innerHTML.style.visibility = visible ;
        fechar_cadastro.innerHTML.style.display = none;
        fechar_login.innerHTML.style.display = none;
        fechar_vazio.innerHTML.style.display = none;
        nick.innerHTML = sessionStorage.nickName_USUARIO;
    
    
    } else {
        window.location = "../login.html";
        ;
    }
    }
    




function limparSessao() {
    
    sessionStorage.clear();
    window.location = "../login.html";
}


function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

