const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});


// Função para login de usuário

let name=localStorage.getItem('usuario')?localStorage.getItem('usuario'):''
    console.log(usuario);
    if(usuario!='') {
        alert('Favor visitar o perfil');
        window.location.href="tela-inicial.html";
    }

    function saveData() {
    let email,psw;
    email=document.getElementById("email").value;

    psw=document.getElementById("psw").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email && v.psw==psw})) {

        alert("Senha de Login");

        let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
        localStorage.setItem('name',current_user.name);
        localStorage.setItem('email',current_user.email);
        window.location.href="tela-inicial.html"
    }
    else {
        alert('Falha no Login');
    }

}

// Função para cadastrar usuário

function saveData() {
    let name,email,psw;

    name=document.getElementById("name").value;
    email=document.getElementById("email").value;

    psw=document.getElementById("psw").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email})) {
        alert("duplicate data");
    }
    else {
        user_records.push({
            "name":name,
            "email":email,
            "psw":psw
        })
        localStorage.setItem("users",JSON.stringify(user_records));
    }
}


  
  
  
