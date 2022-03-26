import swapi from './http';

export const getPage = async (path = '/people/?page=1') => {
  try {
    const res = await swapi.get(`${path}`);
    return res.data;
  } catch (error) {
    throw Error('Error getting characters', error);
  }
};

export const getCharacter = (id) => swapi.get(`/people/${id}`);
