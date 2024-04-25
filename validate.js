// Arquivo JavaScript para validação de formulários

let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputAssunto = document.getElementById("assunto");
let inputMensagem = document.getElementById("mensagem");

function validarFormulario() {
  if (inputNome.value == "") {
    alert('O campo "Nome" não pode ser vazio');
    inputNome.focus();
    return false;
  }

  if (inputEmail.value == "") {
    alert('O campo "Email" não pode ser vazio');
    inputEmail.focus();
    return false;
  }

  if (inputAssunto.value == "") {
    alert('O campo "Assunto" não pode ser vazio');
    inputAssunto.focus();
    return false;
  }

  if (inputMensagem.value == "") {
    alert('O campo "Mensagem" não pode ser vazio');
    inputMensagem.focus();
    return false;
  }

  return true;
}
