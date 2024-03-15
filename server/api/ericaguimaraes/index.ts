export default defineEventHandler((event) => {
  // Send JSON response
  return {
    "nome": "Erica",
    "nomeCompleto": "Erica dos Santos Guimarâes",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/ericaguimaraes.png",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Perna",
    "treinoB": "Braço",
    "treinoC": "",
  
    // Dados Menu Global
    "periodo": "12/03/24 - 12/04/24",
    "status": 2,
    // Treino atual
    "treinoActual": "14/03/24 - 13/04/24",
    // Próxima Treino 
    "treinoNext": "14/04/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
