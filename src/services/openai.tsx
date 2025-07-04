export const sendMessage = async () => {
  const APIBody = {
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "You are a helpful assistant...",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: 'Do you have any information on the book "Somewhere Only We Know" by Maurene Goo? Specifically, what are the main themes, and how is the story structured?',
          },
        ],
      },
    ],
    response_format: {
      type: "text",
    },
    temperature: 1,
    max_completion_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
      Authorization:
        "Bearer" +
        "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",
    },
    body: JSON.stringify(APIBody),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log("DATA:", data);
    });
};
