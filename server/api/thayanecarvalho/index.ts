export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Thayane",
    "nomeCompleto": "Thayane Carvalho",
    "email": "thayane.carvalhoo@gmailcom",
    "senha": "1234",
    "foto": "https://m.leandrocesar.com/img/thayanecarvalho.jpeg",
    "servico": "Consultoria on-line",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Perna (quadríceps)",
    "treinoB": "Perna (glúteo/posterior)",
    "treinoC": "Braço/abdomen",
  
    // Dados Menu Global
    "periodo": "18/03/24 - 18/04/24",
    "status": 2,
    // Treino atual
    "treinoActual": "18/03/24 - 17/04/24",
    // Próxima Treino 
    "treinoNext": "18/04/24",
    // Avaliação atual
    "valuationActual": "13/11/23",
    // Próxima avaliação 
    "valuationNext": "13/02/24"
  }
})
