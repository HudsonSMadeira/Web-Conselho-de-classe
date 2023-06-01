var toggle_btn;
var wrapper;
var hamburger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    wrapper = document.querySelector(".wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}
const main = document.querySelector(".main");
    declare();

let dark = false;

function toggleAnimation(){
    //clone the wrapper
    dark = !dark;
    let clone = wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy"); 
    document.body.classList.add("stop-scrolling");
    main.appendChild(clone);
    clone.addEventListener("animationend", ()=>{
        document.body.classList.remove("stop-scrolling");
        wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });

}

function events(){
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
}
events();


// Função para voltar a pagina inicial

//let name=localStorage.getItem('usuario')?localStorage.getItem('usuario'):''
    //console.log(usuario);
    
//if(usuario=='') {
    //alert('Você precisa fazer o login primeiro');
   // window.location.href="t-login-cadstro.html";
//}

//function Logout() {
  //  localStorage.removeItem('name');
   //localStorage.removeItem('email');
   // window.location.href="t-login-cadstro.html";
//}
