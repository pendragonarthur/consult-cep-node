import axios from "axios";

export default async function consultCep(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return { response: response.data };
  } catch (error) {
    return {
      error: {
        STATUS: error.response.status,
        MESSAGE: error.response.message,
        CODE: error.response.code,
      },
    };
  }
}
