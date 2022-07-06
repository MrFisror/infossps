function confirmSenha() {
  const senha = document.querySelector("input[name=password]");
  const confirma = document.querySelector("input[name=confirm]");

  if (confirma.value === senha.value) {
    confirma.setCustomValidity("");
  } else {
    confirma.setCustomValidity("As senhas estão diferentes");
  }
}