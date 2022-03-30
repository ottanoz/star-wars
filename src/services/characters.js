import swapi from './http';

export const getPage = async (path = '/people/?page=1') => {
  try {
    const res = await swapi.get(`${path}`);
    return res.data;
  } catch (error) {
    throw Error('Error getting characters', error);
  }
};

export const findCharacter = async (searchTerm) => {
  try {
    const res = await swapi.get(`/people/?search=${searchTerm}`);
    return res.data;
  } catch (error) {
    throw Error('Error getting characters', error);
  }
};

export const getCharacter = async (id) => {
  try {
    const people = await swapi.get(`/people/${id}`);

    const { data } = people;

    const homeworld = await swapi.get(data.homeworld);
    data.homeworld = homeworld.data.name;

    const films = await Promise.all(data.films.map((film) => swapi.get(film)));
    data.films = films.map((film) => film.data);

    return data;
  } catch (error) {
    throw Error('Error getting character details', error);
  }
};
