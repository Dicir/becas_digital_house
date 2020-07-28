function filme(personagens, filmes, lancamentos, id)
{
  var personagens = []
  var filmes = []
  var lancamentos = []
  var id = id - 1

  var filme = filme.concat([personagens, filmes, lancamentos])
 
    return personagens +" é um personagem do filme " + filmes[id] + " que estreou no cinema em " + lancamentos[id]
  
    return "Essa não é uma opção válida."
    

}

filme(["Hermione", "Trinity", "Leia"],["Harry Potter", "Matrix", "Star wars"],[2001, 1999, 1977],1)