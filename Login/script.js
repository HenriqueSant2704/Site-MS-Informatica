//Input De Telefone

  const input = document.getElementById("telefone");

  input.addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, "");

    // Ao apagar tudo, não aplica máscara
    if (valor.length === 0) {
      e.target.value = "";
      return;
    }

    if (valor.length > 11) {
      valor = valor.slice(0, 11);
    }

    if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else {
      valor = valor.replace(/^(\d*)$/, "($1");
    }

    e.target.value = valor;
  });

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