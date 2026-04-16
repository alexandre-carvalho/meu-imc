import { IChatRepository } from "domain/repositories/chatRepository";
import axios from "axios";
import { OPENAI_TOKEN } from "config";

export const openAIChatRepository: IChatRepository = {
  async getRecommendation(
    imcValue: number,
    classification: string,
  ): Promise<string> {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content:
                "Você é um profissional da saúde que fornece orientações claras, seguras e acessíveis com base no IMC e classificação do paciente. Suas respostas são diretas, com linguagem simples e sem alarmismo. Você não deve dar diagnósticos, apenas sugestões gerais de bem-estar com base em dados fornecidos.",
            },
            {
              role: "user",
              content: `Com base nesse resultado de IMC: ${imcValue} e nessa Classificação: ${classification}, que recomendações você sugere para essa pessoa?`,
            },
          ],
          temperature: 1,
          max_tokens: 2048,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_TOKEN}`,
          },
        },
      );

      const recommendation = response.data.choices[0].message.content;
      return recommendation;
    } catch (error: any) {
      console.error("Erro na API:", error.response?.data || error.message);
      throw new Error(error.response?.data || error.message);
    }
  },
};
