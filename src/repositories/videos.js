import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (serverResponse) => {

      if (serverResponse.ok) {
        return await serverResponse.json();
      }

      throw new Error("It was not possible to get the data")
    });
}

export default {
  create
}