const container = document.getElementById("container");
const btnCadastro = document.getElementById("btnCadastro");
const btnLogin = document.getElementById("btnLogin");

btnCadastro.addEventListener("click", () => {
  container.classList.add("ativo");
});

btnLogin.addEventListener("click", () => {
  container.classList.remove("ativo");
});


document.querySelector(".container").addEventListener("submit", function(event) {


    event.preventDefault();


    const usuario = document.querySelector(".usuario").value;

  
    const senha = document.querySelector(".senha").value;

  
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";


 
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
 
        alert("Login realizado com sucesso!");
        window.location.href = "/Pages/Home/index.html";
    } else {

       alert("Nome ou Senha incorreto!!");
    }
});