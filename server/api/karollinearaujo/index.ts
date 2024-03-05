export default defineEventHandler((event) => {
  // Send JSON response
  return {
    "nome": "Karolline",
    "nomeCompleto": "Ana Karolline da Silva Araújo",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/karollinearaujo.jpeg",
    "servico": "Consultoria on-line",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Perna (Quadríceps)",
    "treinoB": "Perna (Posterior)",
    "treinoC": "Braço",
  
    // Dados Menu Global
    "periodo": "15/02/24 - 15/05/24",
    "status": 2,
    // Treino atual
    "treinoActual": "04/03/24 - 03/04/24",
    // Próxima Treino 
    "treinoNext": "04/04/24",
    // Avaliação atual
    "valuationActual": "15/01/24",
    // Próxima avaliação 
    "valuationNext": "15/04/24"
  }
})
