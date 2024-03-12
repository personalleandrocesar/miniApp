export default defineEventHandler((event) => {
  // Send JSON response
  return {
    "nome": "Annalú",
    "nomeCompleto": "Annalú Pacheco",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/annalupacheco.png",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Perna (Quadríceps)",
    "treinoB": "Perna (Posterior)",
    "treinoC": "Braço",
  
    // Dados Menu Global
    "periodo": "05/03/24 - 05/04/24",
    "status": 2,
    // Treino atual
    "treinoActual": "12/03/24 - 11/04/24",
    // Próxima Treino 
    "treinoNext": "12/04/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
