export const mockInput = {
    id: 258,
    name: 'Pawnshop Clerk',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: {
      name: 'Pawn Shop Planet',
      url: 'https://rickandmortyapi.com/api/location/55',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/258.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/7'],
    url: 'https://rickandmortyapi.com/api/character/258',
    created: '2017-12-31T13:30:33.611Z',
};

export const mockExpected = {
    name: 'Pawnshop Clerk',
    status: 'Alive',
    species: 'Alien',
    image: 'https://rickandmortyapi.com/api/character/avatar/258.jpeg',
    location: {
      name: 'Pawn Shop Planet',
      url: 'https://rickandmortyapi.com/api/location/55',
    },
}