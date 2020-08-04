import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {

      if (serverResponse.ok) {
        return await serverResponse.json();
      }

      throw new Error("It was not possible to get the data")
    });
}

export default {
  getAllWithVideos,
  getAll
}