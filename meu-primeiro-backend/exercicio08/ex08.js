const usuario = {
  id: 101,
  nome: "Isabelly",
  email: "isabelly@senai.br",
  ehAdmin: true
};

console.log("Nome do Usuário:", usuario.nome);
console.log("Email:", usuario.email);
console.log("Perfil:", usuario.ehAdmin ? "Administrador" : "Aluno");