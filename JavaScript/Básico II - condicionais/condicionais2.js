// switch/case = Muito útil quando sua variavel possui valores especificos 

// Ou quando tem multiplos valores como os dias da semana de domingo a sabádo com 7 cases

const permissoes = "aluno"; // Pode ser 'aluno' || 'professor' || 'admin'

switch(permissoes) { // switch significa chave
    case "aluno":
        console.log("Você só pode visualizar as aulas.")
    break;
    case "professor":
        console.log("Você pode alterar as aulas e adicionar exercicíos")
    break;
    case "admin":
        console.log("Você pode fazer o que quiser no sistema")
    break;
    default: // default = caso não é nenhuma condição anterior 
        console.log("Não sei quem você e no sistema")
}