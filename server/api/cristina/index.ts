export default defineEventHandler((event) => {
  return {
    "nome": "Cristina",
    "nomeCompleto": "Cristina",
    "email": "",
    "senha": "",
    "foto": "https://deepacupuntura.com/img/cristina.jpeg",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Quadríceps/peito/tríceps",
    "treinoB": "Posterior/gluteo/costas",
    "treinoC": "",

    // Dados Menu Global
    "periodo": "01/03/24 - 01/04/24", // Dia do pagamento Mensal
    // 0 = bloqueado; 1 = pendente; 2 = Verificado
    "status": 2,
    // Treino atual
    "treinoActual": "04/03/24 - 03/04/24",
    // Próxima Treino 
    "treinoNext": "04/04/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
