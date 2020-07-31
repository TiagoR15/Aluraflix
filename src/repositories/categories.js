import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

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
  getAllWithVideos
}