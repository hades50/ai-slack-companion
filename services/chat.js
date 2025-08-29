const { axiosConfigInstance } = require('../config/axiosConfig');

/**
 * This is a interface between ollama and slack
 * @param {'hi'} prompt A prompt for the AI chatbot
 * @returns chatReply
 */
const chat = async (prompt) => {
  const { data } = await axiosConfigInstance.post('/', {
    model: 'qwen2.5-coder:1.5b-base-q8_0',
    prompt: `reply pretending you are my girlfriend + ${prompt}`,
    stream: false,
    raw: false,
  });
  return data;
};

module.exports = { chat };
