import axios from "axios";

export async function sendChat(
  userImc: number,
  userClassification: string
): Promise<{
  success: boolean;
  data?: any;
  error?: any;
}> {
  try {
    const APIBody = {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "Você é um profissional da saúde que fornece orientações claras, seguras e acessíveis com base no IMC e classificação do paciente. Suas respostas são diretas, com linguagem simples e sem alarmismo. Você não deve dar diagnósticos, apenas sugestões gerais de bem-estar com base em dados fornecidos.",
        },
        {
          role: "user",
          content: `Com base nesse resultado de IMC: ${userImc} e nessa Classificação: ${userClassification}, que foram gerados a partir do cálculo de IMC, quais recomendações você sugere para essa pessoa?`,
        },
      ],
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      APIBody,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
        },
      }
    );

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Erro na API:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
}
